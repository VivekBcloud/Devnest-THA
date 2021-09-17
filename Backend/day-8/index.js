const express = require("express");
const app = express();

app.get("/getdata", (req, res) => {
  res.statusCode = 200;
  res.json("Hello");
});

app.listen(8080);
