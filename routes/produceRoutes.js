const express = require("express");
const router = express.Router();

const produce = require("../models/produce");


// Render form
router.get("/produce", (req, res) => {
  res.render("produce", { title: "Add New Produce" });
});

// Handle form submission
router.post("/produce", async (req, res) => {
  try {
    console.log(req.body); // Log form data
    const newproduce = new produce(req.body);
    await newproduce.save();
    res.redirect("/producelist");
  } catch (error) {
    console.error("Error saving produce to DB:", error.message);
    res.status(500).send("Unable to save produce to DB");
  }
});

// Display the list of produce
// GET route for /producelist
router.get("/producelist", async (req, res) => {
  try {
    const produceItems = await produce.find().sort({ $natural: -1 });
    res.render("producelist", {
      title: "Produce List",
      produces: produceItems, // Rename to "produces"
    });
  } catch (error) {
    res.status(404).send("Unable to find items in the db");
    console.log("Error fetching produce", error);
  }
});

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




router.post('/updateTonnage', async (req, res) => {
  try {
    const { produceId, newTonnage } = req.body;  // Get the produce ID and new tonnage from the request body

    if (!produceId || newTonnage === undefined) {
      return res.status(400).send('Produce ID and new tonnage are required');
    }

    // Update the tonnage of the specific produce item
    const result = await produce.findByIdAndUpdate(
      produceId,
      { tonnage: newTonnage },
      { new: true }  // Return the updated document
    );

    if (!result) {
      return res.status(404).send('Produce item not found');
    }

    res.json(result);  // Return the updated produce item
  } catch (error) {
    console.error('Error updating tonnage:', error);
    res.status(500).send('Server error');
  }
});





// POST route for updating produce
router.post("/updateproduce", async (req, res) => {
  try {
    await produce.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/producelist");
  } catch (err) {
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



// // For managers only connectEnsureLogin.ensureLoggedIn(),
// router.get(
//   "/reports",
//   /*connectEnsureLogin.ensureLoggedIn(),*/ async (req, res) => {
//     req.session.user = req.user;
//     if (req.user.role == "") {
//       try {
//         // instantiate a crop variable you will use to select a crop.
//         let selectedproduce;
//         if (req.query.searchproduce) selectedproduce = req.query.searchproduce;
//         // Query for returning all tonnage and revenue of a produce
//         let items = await produce.find({ producename: selectedproduce });

//         // console.log("products from the db", goods)
//         // console.log("products from the db after search", items)

//         let totalGrains = await produce.aggregate([
//           { $match: { produceType: "grain" } },
//           {
//             $group: {
//               _id: "$all",
//               stockQuantity: { $sum: "$tonnage" },
//               totalExpense: { $sum: "$totalCost" }, // or as below
//               // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
//               totalProjectedRevenue: {
//                 $sum: { $multiply: ["$sellingPrice", "$tonnage"] },
//               },
//             },
//           },
//         ]);

//         let totalLegumes = await produce.aggregate([
//           { $match: { producetype: "legume" } },
//           {
//             $group: {
//               _id: "$all",
//               stockQuantity: { $sum: "$tonnage" },
//               totalExpense: { $sum: "$totalCost" },
//               totalProjectedRevenue: {
//                 $sum: { $multiply: ["$sellingPrice", "$tonnage"] },
//               },
//             },
//           },
//         ]);
//         // Get total quantity and cost of a produce
//         let totalCrop = await produce.aggregate([
//           { $match: { producename: selectedproduce } },
//           {
//             $group: {
//               _id: "$produceName",
//               stockQuantity: { $sum: "$tonnage" },
//               totalExpense: { $sum: "$totalCost" },
//               totalProjectedRevenue: {
//                 $sum: { $multiply: ["$sellingPrice", "$tonnage"] },
//               },
//             },
//           },
//         ]);

//         res.render("reports", {
//           title: "Reports",
//           produces: items,
//           totalgrains: totalGrains[0],
//           totallegumes: totalLegumes[0],
//           totalcrop: totalCrop[0],
//         });
//       } catch (error) {
//         res.status(400).send("unable to find items in the database");
//         console.log(error);
//       }
//     } else {
//       res.send("This page is only accessed by managers");
//     }
//   }
// );



router.get('/viewstock', async (req, res) => {
  try {
    // Fetch only specific produce items from the database
    
    const produces = await produce.find({
      producename: { 
        $in: ['beans', 'grain maize', 'cowpeas', 'g-nuts', 'rice', 'soybeans']
      }
    });

    // Render the stock view page and pass the produces data to the template

    res.render('viewstock', { produces });
  } catch (err) {
    console.error("Error fetching stock data:", err);
    res.status(500).send("Server error");
  }
});


module.exports = router;
