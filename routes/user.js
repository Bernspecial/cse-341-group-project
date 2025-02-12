const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/control_1");


// Routes
router.get("/", usercontroller.getAllData); // Get all quotes

router.get("/:id", usercontroller.getSingleData); // Get a single quote by ID

module.exports = router;