const mongoose = require('mongoose');

const UzytkownikSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection: 'users' });

const UzytkownikModel = mongoose.model('user', UzytkownikSchema);
module.exports = UzytkownikModel;