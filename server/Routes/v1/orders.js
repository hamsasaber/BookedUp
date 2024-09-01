const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  orderByID,
  placeOrder,
  editOrder,
  cancelOrder,
} = require("../../controllers/v1/order");

router.get("/", getAllOrders);

router.get("/:id", orderByID);

router.post("/", placeOrder);

router.put("/:id", editOrder);

router.delete("/:id", cancelOrder);

module.exports = router;
