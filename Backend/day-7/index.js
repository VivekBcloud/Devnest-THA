const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.json("Hello");
});
app.get("/data", (req, res) => {
  const data = req.query;
  res.statusCode = 201;
  res.json(data);
});
app.get("/status", (req, res) => {
  res.status(300).send("status");
});
app.get("/l?i?zi", (req, res) => {
  res.status(200).send("called me");
});
app.get("/lzi+", (req, res) => {
  res.status(200).send("LZI");
});
app.get(/.*lzi$/, (req, res) => {
  res.status(200).send("Connected to lzi");
});
app.get("/user/:name", (req, res) => {
  res.status(200).send(req.params);
});

app.listen(8080);
