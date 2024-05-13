const express = require("express");
const controller = require("./todoController");

const router = express.Router();

// Define route for getting todos and adding a new todo
router.route("/")
    .get(controller.get)
    .post(controller.post);

module.exports = router;
