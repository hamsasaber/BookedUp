const express = require("express");
const router = express.Router();

const {
  getAllCustomers,
  customerByID,
  createCustomer,
  editCustomer,
  deleteCustomer,
} = require("../../controllers/v1/customer");
const { upload } = require("../../middleware/imageUpload");

router.get("/", getAllCustomers);

router.get("/:id", customerByID);

router.post("/", upload, createCustomer);

router.put("/:id", upload, editCustomer);

router.delete("/:id", deleteCustomer);

module.exports = router;
