const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  updateUserByEmail,
  deleteUserById,
  deleteUserByEmail,
} = require("../controllers/studentController");


router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id", getUserById);

router.get("/email/:email", getUserByEmail);

router.patch("/email/:email", updateUserByEmail);

router.patch("/:id", updateUserById);

router.delete("/email/:email", deleteUserByEmail);

router.delete("/:id", deleteUserById);

module.exports = router;