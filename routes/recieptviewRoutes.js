const express= require('express');
const router=express.Router();

//import {models} from 'mongoose';

// const form = require ('../models/form');

 router.get("/receiptoverview", (req, res) => {
  res.render('receiptoverview', )});


    router.post("/receiptoverview", (req, res) => { 
        newform.save()
    res.redirect('/receiptoverview')
     });

    


    module.exports = router;