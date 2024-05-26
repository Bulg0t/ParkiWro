const mongoose = require('mongoose')

const ParkSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    photo: String,
})

const ParkModel = mongoose.model("park", ParkSchema)
module.exports = ParkModel;