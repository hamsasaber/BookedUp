const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  userByID,
  logIn,
  createUser,
  editProfile,
  deleteUser,
} = require("../../controllers/v1/user");

router.get("/", getAllUsers);

router.get("/:id", userByID);

router.post("/", createUser);

router.post("/login", logIn);

router.put("/:id", editProfile);

router.delete("/:id", deleteUser);

module.exports = router;
