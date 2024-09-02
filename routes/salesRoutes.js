const express = require('express');
const router = express.Router();

const sales = require('../models/sales');

// Render form
router.get('/sales', (req, res) => {
    res.render('sales', { title: "Sale a new produce" });
});

// Handle form submission
router.post('/sales', async (req, res) => {
    try {
        console.log(req.body); // Log form data
        const newsales = new sales(req.body);
        await newsales.save();
        res.redirect('/saleslist');
    } catch (error) {
        console.error("Error saving produce to DB:", error.message);
        res.status(500).send("Unable to save a sale to the DB");
    }
});

// Render list of sales
router.get('/saleslist', async (req, res) => {
    try {
        const salesItems = await sales.find().sort({ $natural: -1 }); 
        res.render('saleslist', {
            title: "Sales List",
            sales: salesItems, // Pass as 'sales' here
        });
    } catch (error) {
        res.status(404).send("Unable to find items in the DB");
        console.log("Error fetching produce", error);
    }
});

// Get sales update form
router.get("/updatesale/:id", async (req, res) => {
    try {
        const item = await sales.findOne({ _id: req.params.id });
        res.render("updatesale", {
            title: "Update sales list",
            sales: item,
        });
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});

// Post updated produce
router.post("/updatesale", async (req, res) => {
    try {
        const saleId = req.body.id;  // Get the sale ID from the form
        await sales.findOneAndUpdate({ _id: saleId }, req.body);
        res.redirect("/saleslist");
    } catch (err) {
        res.status(400).send("Unable to update item in the database");
    }
});

// Delete sales
router.post("/deletesales", async (req, res) => {
    try {
        await sales.deleteOne({ _id: req.body.id });
        res.redirect("back");
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});


module.exports = router;
