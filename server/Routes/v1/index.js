const express = require("express");
const router = express.Router();

router.use("/authors", require("./authors"));
router.use("/books", require("./books"));
router.use("/customers", require("./customers"));
router.use("/orderLines", require("./orderLines"));
router.use("/orders", require("./orders"));
router.use("/ratings", require("./ratings"));
router.use("/users", require("./users"));
module.exports = router;
