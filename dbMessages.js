const mongoose = require("mongoose");

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
})


const Message = mongoose.model('messagecontents', whatsappSchema);
module.exports = Message;