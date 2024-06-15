const mongoose = require('mongoose');
const BadgeModel = require('./models/Badge');

mongoose.connect("mongodb://127.0.0.1:27017/uzytkownik", { useNewUrlParser: true, useUnifiedTopology: true });

const badges = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Parkowy Odkrywca',
    description: 'Zeskanowanie QR kodu w dowolnym parku po raz pierwszy!',
    qrCode: 'QR1'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Znawca Zieleni',
    description: 'Odznaka za odwiedzenie pięciu różnych parków!',
    qrCode: 'QR2'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Miejski Eksplorer',
    description: 'Odznaka za odwiedzenie wszystkich parków w jednej dzielnicy!',
    qrCode: 'QR3'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Nocny Spacerowicz',
    description: 'Odznaka za odwiedzenie parku w godzinach wieczornych!',
    qrCode: 'QR4'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Fotograf Natury',
    description: 'Odznaka za dodanie pierwszego zdjęcia do opisu parku!',
    qrCode: 'QR5'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Eko Przyjaciel',
    description: 'Odznaka za udział w wydarzeniu ekologicznym w parku!',
    qrCode: 'QR6'
  }
];

const addBadges = async () => {
  try {
    await BadgeModel.insertMany(badges);
    console.log('Badges added successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error adding badges:', err);
    mongoose.connection.close();
  }
};

addBadges();