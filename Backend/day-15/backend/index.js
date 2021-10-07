const express = require("express");
const { app_port } = require("./config");
const cors = require("cors");
const app = express();
const products = require("./routes/products");
const loadproducts = require("./routes/loadproducts");
var port = app_port || 3030;

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("Connected to server");
});

app.use("/products", products);
app.use("/loadproducts", loadproducts);

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
