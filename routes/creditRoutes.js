const express = require('express');
const router = express.Router();

// Require the credit model
const Credit = require('../models/credit');

// Render the form for adding a new credit
router.get('/credit', (req, res) => {
    res.render('credit', { title: "Add New Credit" });
});

// Handle form submission for adding a new credit
router.post('/credit', async (req, res) => {
    try {
        console.log(req.body); // Log form data
        const newCredit = new Credit(req.body); // Create a new instance of the Credit model
        await newCredit.save(); // Save to the database
        res.redirect('/creditlist'); // Redirect to the credit list after saving
    } catch (error) {
        console.error("Error saving credit to DB:", error.message);
        res.status(500).send("Unable to save the credit to the DB");
    }
});

// Display the list of credits
router.get('/creditlist', async (req, res) => {
    try {
        // Query the database for all credits, sorted by the most recently added first
        const creditItems = await Credit.find().sort({ $natural: -1 }); 
        res.render('creditlist', {
            title: "Credit List",
            credit: creditItems // Pass the queried credits to the template
        });
    } catch (error) {
        console.error("Error fetching credits from DB:", error.message);
        res.status(404).send("Unable to find credits in the DB");
    }
});



module.exports = router;
