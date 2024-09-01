const express = require("express");
const router = express.Router();

const {
  getAllOrderlines,
  getbyID,
  order,
  deleteOrders,
} = require("../../controllers/v1/orderLine");

router.get("/", getAllOrderlines);

router.get("/:id", getbyID);

router.post("/", order);

router.delete("/:id", deleteOrders);
module.exports = router;
