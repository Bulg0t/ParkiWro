const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UzytkownikModel = require("./models/Uzytkownicy");
const app = express();
const ParkModel = require("./models/Parks");
const PostModel = require("./models/Posts");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const passport = require("./passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BadgeModel = require("./models/Badge");

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:5173", // Allow requests from this origin
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, POST, PUT, DELETE" // Allowed methods
};

app.use(cors(corsOptions));
app.use(passport.initialize());

mongoose.connect("mongodb://127.0.0.1:27017/uzytkownik");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ParkiWro API",
            version: "1.0.0",
            description: "Api dla aplikacji ParkiWro",
        },
        servers: [
            {
                url: "http://localhost:3001/",
            },
        ],
    },
    apis: ["./swagger.yaml"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




async function getRanking() {
  try {
    const ranking = await BadgeModel.aggregate([
      // Rozwinięcie tablicy userIds do wielu dokumentów
      { $unwind: '$userIds' },
      
      // Grupowanie po userId i liczenie liczby odznak
      { 
        $group: { 
          _id: '$userIds', 
          badgeCount: { $sum: 1 } 
        } 
      },

      // Sortowanie według liczby odznak w porządku malejącym
      { $sort: { badgeCount: -1 } },

      // Łączenie wyników z kolekcją użytkowników
      { 
        $lookup: {
          from: 'users', // Nazwa kolekcji użytkowników
          localField: '_id',
          foreignField: '_id',
          as: 'user'
        }
      },

      // Rozwinięcie tablicy user do pojedynczego dokumentu
      { $unwind: '$user' },

      // Projektowanie dokumentu z odpowiednimi polami
      { 
        $project: { 
          _id: 0,
          userId: '$_id',
          name: '$user.name',
          email: '$user.email',
          badgeCount: 1 
        }
      }
    ]);

    return ranking;
  } catch (err) {
    console.error('Error fetching ranking:', err);
    throw err;
  }
}

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UzytkownikModel({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.json({
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email
        });
    } catch (err) {
        console.error('Error during registration:', err.message);
        console.error('Stack trace:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await UzytkownikModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token, email: user.email });
    } catch (err) {
        console.error('Error during login:', err.message);
        console.error('Stack trace:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    req.logout();
    res.json("Successfully logged out");
});

app.get('/api/parks', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const parks = await ParkModel.find();
        res.json(parks);
    } catch (err) {
        res.status(500);
    }
});

app.get('/api/park', async (req, res) => {
    try {
        const parkId = req.query.id;
        console.log('ID', parkId);
        const park = await ParkModel.find({ _id: parkId });
        return res.json(park);
    } catch (err) {
        res.status(500);
    }
});

app.get('/blog', async (req, res) => {
    const parkId = req.query.id;
    console.log('ID', parkId);
    try {
        const posts = await PostModel.find({ parkId });
        const userIds = posts.map(post => post.userId).concat(posts.flatMap(post => post.comments.map(comment => comment.userId)));
        const uniqueUserIds = [...new Set(userIds)];

        const users = await UzytkownikModel.find({ _id: { $in: uniqueUserIds } }, 'email name');
        console.log('Posts:', posts);
        console.log('Users:', users);

        res.json({ posts, users });
    } catch (err) {
        console.error('Error fetching posts:', err.message);
        console.error('Stack trace:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/posts', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { title, content, parkId, comments } = req.body;

    const userId = req.user._id;

    if (!title || !content || !parkId) {
        return res.status(400).json({ error: 'Title, content, and parkId are required' });
    }

    try {
        const newPost = new PostModel({
            _id: new mongoose.Types.ObjectId(),
            title,
            content,
            userId,
            parkId,
            comments
        });
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        console.error('Error creating post:', err.message);
        console.error('Stack trace:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/posts/:postId/comments', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { postId } = req.params;
    const { text } = req.body;
    const userId = req.user._id;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const post = await PostModel.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        post.comments.push({ text, userId });
        await post.save();

        res.json(post);
    } catch (err) {
        console.error('Error adding comment:', err.message);
        console.error('Stack trace:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/badges/assign', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { qrCode } = req.body;
    const userId = req.user._id;

    try {
        const badge = await BadgeModel.findOne({ qrCode });
        if (!badge) {
            return res.status(404).json({ error: 'Badge not found' });
        }

        if (badge.userIds.includes(userId)) {
            return res.status(400).json({ error: 'Badge already assigned to this user' });
        }

        badge.userIds.push(userId);
        await badge.save();

        res.json({ message: 'Badge assigned successfully', badge });
    } catch (err) {
        console.error('Error assigning badge:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/badges', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userId = req.user._id;

    try {
        const badges = await BadgeModel.find({ userIds: userId });
        res.json(badges);
    } catch (err) {
        console.error('Error fetching badges:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Nowa trasa dla rankingu użytkowników
app.get('/api/users/ranking', async (req, res) => {
    try {
        console.log
        const ranking = await getRanking();
        res.json(ranking);

    } catch (error) {
        res.status(500).json({ message: 'Błąd podczas pobierania rankingu użytkowników' });
        console.log("moj blad,")

    }
});

app.listen(3001, () => {
    console.log("server is running");
});
