const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
//User Routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;