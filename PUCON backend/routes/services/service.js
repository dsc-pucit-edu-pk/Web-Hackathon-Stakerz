const express = require('express');
const router = express.Router();
const fs = require('fs');
const nodemailer = require("nodemailer");
const path = require('path');
var {ObjectId} = require('mongodb');
const bcrypt = require('bcrypt');
const randomstring = require("randomstring");
const details = require('../../routes/config/details.json');
const passport = require("passport");
var generator = require('generate-password');
const jwt = require('jsonwebtoken');
const Participants = require('../models/participants')
const events = require('../models/events')
const users = require('../models/users')
///////////// 


router.post("/eventsupdate",  async (req, res) => {
  try {
    var _id = req.body._id
    const {title,desc,date,starttime,endtime,duration}=req.body
    var poster = req.files.poster

    try{
      fs.writeFileSync(path+poster.name.toString(), image.data);
    }
    catch{}
    
  if(fs.existsSync(path)){
    console.log("YES")
  }
    
  
    await events.findOneAndUpdate({"_id":_id},{
    title:title,
    desc:desc,
    date:date,
    starttime:starttime,
    endtime:endtime,
    poster:poster.name,
    duration:duration
    })
    res.send({'status':200});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

  router.post("/createEvent", async (req, res) => {
    var title = req.body.title;
    var desc  = req.body.desc;
    var date = req.body.date;
    var starttime = req.body.starttime;
    var endtime = req.body.endtime;
    var poster = req.files.poster; 
    var duration = req.body.duration;

    var path = __dirname+ "/../../../Al_Quran/src/assets/images/"
 

    fs.writeFileSync(path + poster.name.toString(), poster.data);
    
    var obj = new events({
      title:title,
      desc:desc,
      date:date,
      starttime:starttime,
      endtime:endtime,
      poster:poster.name,
      duration:duration
    })
      await obj.save()
      .then(()=>{
          return res.send({'status':200})
      })
  })


  router.post("/deletevents/:_id", async (req, res) => {
    var data = await events.findOneAndDelete({"_id":req.params._id})

if(data)
return res.json({status:200})
else
return res.json({status:400})

  })


  router.post("/fetchevents", async (req, res) => {
    var data = await events.find().then(result=>{
      return res.send(result)
    })
  })

  router.post("/fetchuser", async (req, res) => {
    var obj = await users.find({'_id':req.body.eventid}).then((result)=>{
      return res.send(result)
    })
  })
 

  //delete event
  router.get("/api/eventsdelete",  async (req, res) => {
    try {
      const {id}=req.body
      const event = await events.findByIdAndDelete({id})
      res.send(event);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  //update event
  router.post("/eventsupdate",  async (req, res) => {

var update = await events.findByIdAndUpdate({"_id":req.body._id} ,req.body )    

console.log(update)
if(update)
res.json({message:'update successs'})
else
res.json({message:'error'})
    
  });

  // participants 


 

     
  


  router.post('/api/addparticpants',async(req,res)=>{
    try{
      const {eventId,userid,cnic,phone,university,name,email}=req.body;
      let event = new events({
        eventId: eventId,
        userid: userid,
        cnic:cnic,
        phone:phone,
        university:university,
        name:name,
        email:email
      })
      event = await events.save()
      res.send(event)


    }catch (e) {
      res.status(500).json({ error: e.message });
    }
  })
  router.post("/search/:name",  async (req, res) => {
    try {
      var event = await events.find({
        title: { $regex: req.params.name, $options: "i" },
      });
      if(event.length > 0){
        return res.send(event)  
      }else{
        var event = await events.find({
          description: { $regex: req.params.name, $options: "i" },
        })
        if(event.length>0){
          return res.send(event)
        }else{
          var event = await events.find({
            date: { $regex: req.params.name, $options: "i" },
          })
          if(event.length >0){
            return res.send(event)
          }else{
            return []
          }
        }
      }
  
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });


  router.post('/api/signup',async(req,res)=>{
    
    const {name,email,password} = req.body;
    console.log({name,email,password})
    const existuser = await users.findOne({email});

    if(existuser){
        return res.status(400).json({msg:"user with same email already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    let user = new users({
        name,
        email,
        password: hashedPassword,
        role:"user"
    })
    user= await user.save()
    res.json(user)


})
  


router.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    const user = await users.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "userss with this email does not exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password." });
    }
    var token = jwt.sign({ id:user._id}, 'stackerz');
   
    res.json({"_id":user._id,
              "name":user.name,
              "email":user.email,
              "password":user.password,
              "createdAt":user.createdAt,
              "updatedAt":user.updatedAt,
              "token":token
            });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


router.post("/fetch", async (req, res) => {
  var obj = await users.find({'_id':req.body._id}).then((result)=>{
    return res.send(result)
  })
})


  module.exports = router;
   