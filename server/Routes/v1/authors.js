const express = require("express");
const router = express.Router();

const {
  getAllAuthors,
  authorByID,
  CreateAuthor,
  EditAuthor,
  RemoveAuthor,
} = require("../../controllers/v1/author");
const { upload } = require("../../middleware/imageUpload");

router.get("/", getAllAuthors);

router.get("/:id", authorByID);

router.post("/", upload, CreateAuthor);

router.put("/:id", upload, EditAuthor);

router.delete("/:id", RemoveAuthor);

module.exports = router;
