const express = require("express");
const router = express.Router();

const {
  getAllRatings,
  Rate,
  editRate,
} = require("../../controllers/v1/rating");

router.get("/", getAllRatings);

router.post("/", Rate);

router.put("/:id", editRate);

module.exports = router;
