const express= require('express');
const router=express.Router();


const sales = require('../models/sales');




// Render form
router.get('/sales', (req, res) => {
    res.render('sales', { title: "sale a new produce" });
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
            title: "sales  List",
            sales: salesItems,

        });

    } catch (error) {
        res.status(404).send("Unable to find items in the db");
         console.log("Error fetching produce", error);

    }
});


// get produce update form
router.get("/updateproduce/:id", async (req, res) => {
    try {
    const item = await Produce.findOne({ _id: req.params.id });
    res.render("procurelist", {
    title: "Update Produce",
    produce: item,
    });
    } catch (err) {
    res.status(400).send("Unable to find item in the database");
    }
    });
    
    // post updated produce
    router.post("/updateproduce", async (req, res) => {
    try {
    await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/procurelist");
    } catch (err) {
    res.status(400).send("Unable to update item in the database");
    }
    });
    
    // delete Produce
    router.post("/deleteProduce", async (req, res) => {
    try {
    await Produce.deleteOne({ _id: req.body.id });
    res.redirect("back");
    } catch (err) {
    res.status(400).send("Unable to delete item in the database");
    }
    });

    module.exports = router;