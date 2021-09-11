const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.json("Hello");
});

app.listen(8080);
