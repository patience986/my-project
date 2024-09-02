const express = require('express');
const router = express.Router();

// Require the credit model
const Credit = require('../models/credit'); // Use capital 'C' for models

// Render the form for adding a new credit
router.get('/credit', (req, res) => {
    res.render('credit', { title: "Add New Credit" });
});

// Handle form submission for adding a new credit
router.post('/credit', async (req, res) => {
    try {
        console.log(req.body); // Log form data
        const newCredit = new Credit(req.body); // Create a new instance of the Credit model
        await newCredit.save(); // Save the credit to the database
        res.redirect('/creditlist'); // Redirect to the credit list after saving
    } catch (error) {
        console.error("Error saving credit to DB:", error.message);
        res.status(500).send("Unable to save the credit to the database");
    }
});

// Display the list of credits
router.get('/creditlist', async (req, res) => {
    try {
        // Query the database for all credits, sorted by most recent
        const creditItems = await Credit.find().sort({ $natural: -1 }); 
        res.render('creditlist', {
            title: "Credit List",
            credits: creditItems // Pass the queried credits as "credits" to match the Pug template
        });
    } catch (error) {
        console.error("Error fetching credits from DB:", error.message);
        res.status(404).send("Unable to find credits in the database");
    }
});

// Get sales update form
router.get("/updatecredit/:id", async (req, res) => {
    try {
        const item = await credit.findOne({ _id: req.params.id });
        res.render("updatecredit", {
            title: "Update sales list",
            credit: item,
        });
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});

// Post updated produce
router.post("/updatecredit", async (req, res) => {
    try {
        const CreditId = req.body.id;  // Get the sale ID from the form
        await Credit.findOneAndUpdate({ _id: CreditId }, req.body);
        res.redirect("/creditlist");
    } catch (err) {
        res.status(400).send("Unable to update item in the database");
    }
});

// Delete sales
router.post("/deletecredit", async (req, res) => {
    try {
        await Credit.deleteOne({ _id: req.body.id });
        res.redirect("back");
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});

module.exports = router;
