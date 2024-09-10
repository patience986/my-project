const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');
const passport = require('passport');

// Render the signup form
router.get('/Signup', (req, res) => {
  res.render('Signup', { title: 'Signup' });
});

// Handle form submission
router.post('/Signup', async (req, res) => {
  try {
    const existingUser = await Signup.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send('User with this email already exists!');
    }

    const newUser = new Signup(req.body);
    await Signup.register(newUser, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect('/login');
    });
  } catch (err) {
    res.status(400).render('Signup', { title: 'Signup', error: err.message });
  }
});


// Export the router
module.exports = router;
