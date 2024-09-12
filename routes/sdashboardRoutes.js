const express= require('express');
const router=express.Router();
const connectEnsureLogin = require('connect-ensure-login');


const sales = require("../models/sales");
const produce = require("../models/produce");



 router.get("/sdashboard", (req, res) => {
  res.render('sdashboard', )});


    router.post("/sdashboard" ,connectEnsureLogin.ensureLoggedIn(), (req, res) => {    const newform = new form(req.body)
        newform.save()
    res.redirect('')
     });

     module.exports = router;