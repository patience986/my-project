const express= require('express');
const router=express.Router();
const connectEnsureLogin = require('connect-ensure-login');

const sales = require("../models/sales");
const produce = require("../models/produce");


 router.get("/dashboard",connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render('dashboard', )});


    router.post("/dashboard", (req, res) => {    const newform = new form(req.body)
        newform.save()
    res.redirect('')
     });

     router.get("/dashboard", async (req, res) => {
      try {
        // Fetch total stock
        const totalStock = await produce.aggregate([
          { $group: { _id: null, total: { $sum: "$tonnage" } } }
        ]);
    
        // Fetch total sales
        const totalSales = await sales.aggregate([
          { $group: { _id: null, total: { $sum: "$amountpaid" } } }
        ]);
    
        // Fetch credit sales count (assuming you mark credit sales separately)
//        const creditSales = await sales.countDocuments({ amountpaid: { $lt: /* expected full payment */ } });
    
        // Fetch total receipts (assuming one receipt per sale)
        const receipts = await sales.countDocuments();
    
        res.render("dashboard", {
          title: "Dashboard - KGL Produce Management",
          totalStock: totalStock[0]?.total || 0,
          totalSales: totalSales[0]?.total || 0,
          creditSales,
          receipts,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).send("Error loading dashboard.");
      }
    });
    
    router.get('/dashboard', async (req, res) => {
      try {
        const totalStock = await produce.aggregate([
          { $group: { _id: null, total: { $sum: "$tonnage" } } }
        ]);
        const totalSales = await sales.aggregate([
          { $group: { _id: null, total: { $sum: "$amountpaid" } } }
        ]);
//        const creditSales = await sales.countDocuments({ amountpaid: { $lt: /* expected full payment */ } });
        const receipts = await sales.countDocuments();
    
        res.json({
          totalStock: totalStock[0]?.total || 0,
          totalSales: totalSales[0]?.total || 0,
          creditSales,
          receipts
        });
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
        res.status(500).json({ error: 'Error fetching dashboard stats' });
      }
    });
    

    
  
    module.exports = router;