const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UzytkownikModel = require("./models/Uzytkownicy")
const app = express()
const ParkModel = require("./models/Parks")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/uzytkownik");

app.post('/register', (req,res)=>{
    UzytkownikModel.create(req.body)
    .then(uzytkownicy => res.json(uzytkownicy))
    .catch(err => res.json(err))
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    UzytkownikModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password == password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }

        }
        else{
            res.json("No record existed")
        }
        })
    })

app.get('/api/parks', async(req,res)=>{
    console.log('We look here');
    try{
        const parks = await ParkModel.find();
        console.log('Parks', parks);
        res.json(parks);
    }
    catch (err) {
        res.status(500);
    }
})

app.listen(3001, ()=>{
    console.log("server is running")
})