// Import the required libraries.
const express = require("express");
const bodyParser = require("body-parser");

const { verifySignUp } = require("../middleware");

const controller = require("../controllers/auth-controller");

const router = express.Router();

// Library to parse the request object.
router.use(bodyParser.urlencoded({ extended: false }));

router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  controller.signup
);

router.post("/signin", controller.signin);


// Handles get request for the route: /admin/add-model-data.
// router.get("/add-model-data", modelController.getAddModelData);

// Handles post request for the route: /admin/add-model-data.
// router.post("/add-model-data", modelController.postAddModelData);

// Export the router object.
exports.routes = router;