const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  BookbyID,
  newBook,
  editBook,
  removeBook,
} = require("../../controllers/v1/book");
const { upload } = require("../../middleware/imageUpload");

router.get("/", getAllBooks);

router.get("/:id", BookbyID);

router.post("/", upload, newBook);

router.put("/:id", upload, editBook);

router.delete("/:id", removeBook);

module.exports = router;
