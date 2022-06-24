// Import the express module.
const express = require("express");

// Import files stored in the routes.
const adminData = require("./admin");

// Add the fucntionalities defined in the controllers folder.
const profileController = require('../controllers/user-profile');

// To work with the routes,
const router = express.Router();

// Call back function to be called when the root url 
router.get("/update-profile", profileController.getUpdateUserProfilePage);

// Call back function to be called when the root url 
router.get("/", (req, res, next) => {
    res.send("Homepage is working");
});

// Export this object.
exports.routes = router;
