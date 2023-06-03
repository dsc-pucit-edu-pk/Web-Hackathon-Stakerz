const mongoose = require("mongoose");

const Participants = mongoose.Schema({
  userID: {
    required: true,
    type: String,
    trim: true,
  },
  eventId:{
    required: true,
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('Participants', Participants);