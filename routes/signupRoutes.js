const express = require("express");
const router = express.Router();
const passport = require("passport");

router.use(passport.initialize());
router.use(passport.session());

//import model
const Signup = require("../models/signup");


// Register admin
//router.post()
router.get("/Signup", (req, res) => {
  res.render("signup", { title: "Signup" });
});
router.post("/Signup", async (req, res) => {
  try {
    // added
    const existingUser = await Signup.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .send("Not registered, a user with a similar email already exists!");
    }
    const user = new Signup(req.body);
    await Signup.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/login");
    });
  } catch (err) {
    res.status(400).render("signup", { title: "Signup" });
    console.log("Signup user error", err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");

});

// Login admin page
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    req.session.user = req.user; //assigning a session to a user who has logged in
    if (req.user.role === "manager") {
    res.redirect("/dash");
      res.send("This is the manager dashboard");
    } else if (req.user.role === "salesagent") {
       res.redirect("/salesdashboard");
      res.send("Saleagent dashboard");
    } else {
      res.send("user with that role does not exist in the system");
    }
  }
);

// Logout route
// router.get("/logout", (req, res) => {
//   if (req.session) {
//     req.session.destroy((err) => {
//       if (err) {
//         return res.status(500).send("Error logging out");
//       }
//       res.redirect("/");
//     });
//   }
// });

module.exports = router;
