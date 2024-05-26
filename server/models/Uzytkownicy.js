const mongoose = require('mongoose')

const UzytkownikSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const UzytkownikModel = mongoose.model("user", UzytkownikSchema)
module.exports = UzytkownikModel;