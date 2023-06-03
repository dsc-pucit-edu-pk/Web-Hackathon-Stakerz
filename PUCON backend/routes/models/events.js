const mongoose  = require("mongoose");

var events = new mongoose.Schema({
    
  
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    starttime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
   
    
});

module.exports = mongoose.model('events', events);