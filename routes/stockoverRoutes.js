const express= require('express');
const router=express.Router();

//import {models} from 'mongoose';

const form = require ('../models/form');

 router.get("/stockoverview", (req, res) => {
  res.render('stock')});


    router.post("/stockoverview", (req, res) => {    // const newform = new form(req.body)
        newform.save()
    res.redirect('')
     });

  


    module.exports = router;