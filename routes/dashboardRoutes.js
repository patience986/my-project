const express= require('express');
const router=express.Router();

//import {models} from 'mongoose';

// const form = require ('../models/form');

 router.get("/dashboard", (req, res) => {
  res.render('dashboard', )});


    router.post("/dashboard", (req, res) => {    // const newform = new form(req.body)
        newform.save()
    res.redirect('')
     });

   


    module.exports = router;