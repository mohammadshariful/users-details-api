const express = require("express");
const usersController = require("../../controllers/users.controller");
const router = express.Router();

router.get("/random", usersController.getRandomUser);
router.get("/all", usersController.getAllUsers);
router.post("/save", usersController.saveUserData);
router.patch("/update", usersController.updateRandomUser);
router.delete("/delete", usersController.deleteUser);
module.exports = router;
