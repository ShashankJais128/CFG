const { authJwt } = require("../middleware");

const controller = require("../controllers/user-controller");

// Import the express module.
const express = require("express");

// Import files stored in the routes.
const adminData = require("./auth-routes");

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

router.get("/api/test/all", controller.allAccess);

router.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

router.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);
  
router.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

// Export this object.
exports.routes = router;
    