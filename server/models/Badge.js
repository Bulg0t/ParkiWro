const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  qrCode: { type: String, required: true, unique: true },
  userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
});

const BadgeModel = mongoose.model("badge", badgeSchema);
module.exports = BadgeModel;
