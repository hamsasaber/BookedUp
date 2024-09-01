const express = require("express");
const cors = require("cors");
const db = require("./models");
const path = require("path");
//setup
const port = 9850;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./Routes"));

app.get("/images/:name", function (req, res, next) {
  var options = {
    root: path.join(__dirname, "images"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
  };
  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      return res.status(404).json("File not found");
    }
  });
});

db.sequelize
  .sync()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
