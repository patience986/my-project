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

module.exports = router;
