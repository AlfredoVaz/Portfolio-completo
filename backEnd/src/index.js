const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/t3",
  {
    useNewUrlParser: true
  }
);
app.use("/api", routes);
app.listen(9999);

