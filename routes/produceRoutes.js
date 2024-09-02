const express = require('express');
const router = express.Router();

const produce = require('../models/produce');

// Render form
router.get('/produce', (req, res) => {
    res.render('produce', { title: "Add New Produce" });
});

// Handle form submission
router.post('/produce', async (req, res) => {
    try {
        console.log(req.body); // Log form data
        const newproduce = new produce(req.body);
        await newproduce.save();
        res.redirect('/procurelist');
    } catch (error) {
        console.error("Error saving produce to DB:", error.message);
        res.status(500).send("Unable to save produce to DB");
    }
});

// Display the list of produce
router.get('/procurelist', async (req, res) => {
    try {
        const produceItems = await produce.find().sort({ $natural: -1 }); 
        res.render('procurelist', {
            title: "Produce List",
            produces: produceItems,

        });

    } catch (error) {
        res.status(404).send("Unable to find items in the db");
        console.log("Error fetching produce", error);

    }
});


//get  produce update form
router.get("/updateproduce/:id", async (req, res) => {
    try {
        const item = await produce.findOne({ _id: req.params.id });
        res.render("updateproduce", {
            title: "Update produce list",
            produce: item,
        });
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});

router.post("/updateproduce/:id", async (req, res) => {
    try {
        const produceId = req.params.id;  // Get the produce ID from the URL
        if (!produceId) {
            return res.status(400).send("Produce ID is required");
        }
        await produce.findOneAndUpdate({ _id: produceId }, req.body);
        res.redirect(`/updateproduce/${produceId}`);  // Redirect to the update page of the updated item
    } catch (err) {
        console.error(err);  // Log the error for debugging
        res.status(400).send("Unable to update item in the database");
    }
});





// Delete produce
router.post("/deleteproduce", async (req, res) => {
    try {
        await produce.deleteOne({ _id: req.body.id });
        res.redirect("back");
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});


module.exports = router;
