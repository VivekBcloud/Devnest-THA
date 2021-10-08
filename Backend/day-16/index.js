const express = require("express");
const { app_port } = require("./config");
const cors = require("cors");
const app = express();
const stream = require("./routes/stream");
var port = app_port || 3030;

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("Connected to server");
});

app.use("/stream", stream);

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
