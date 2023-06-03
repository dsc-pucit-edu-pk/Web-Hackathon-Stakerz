const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


// var url ='mongodb://127.0.0.1:27017/Quran'
 
// this is my Atlas link

// mongodb+srv://mubeenijaz773:loop123*@my-app.98eylhm.mongodb.net/?retryWrites=true&w=majority

var url = 'mongodb+srv://123:123@e-store.uf5qztz.mongodb.net/WebCompetition'
// mongodb+srv://123:123@e-store.uf5qztz.mongodb.net/?retryWrites=true&w=majority/WebCompetition

// var url ='mongodb+srv://QuranCluster:QuranCluster@qurancluster.srlkqhp.mongodb.net/quran-global-dev'
// mongodb+srv://Abdul:a2znewdb@cluster0.3qsqm.mongodb.net/A2Z_new?retryWrites=true&w=majority



mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB Atlas'));
 
module.exports = router;     