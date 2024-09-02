const express= require('express');
const router=express.Router();

//import {models} from 'mongoose';

// const form = require ('../models/form');

 router.get("/login", (req, res) => {
  res.render('login')});


    router.post("/login", (req, res) => {    // const newform = new form(req.body)
        newform.save()
    res.redirect('/dashboard')
     });

   


    module.exports = router;