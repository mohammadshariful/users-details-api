const express = require("express");
const usersController = require("../../controllers/users.controller");
const router = express.Router();

router.get("/random", usersController.getRandomUser);

module.exports = router;
