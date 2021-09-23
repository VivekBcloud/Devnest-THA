const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("time", Date.now());
  next();
});

app.get("/getdata", (req, res) => {
  res.statusCode = 200;
  res.json("Hello");
});

app.listen(8080);
