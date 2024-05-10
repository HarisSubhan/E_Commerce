const express = require("express");
const errorhandler = require("./middleware/errormiddlware");
const connectedDB = require("./config/connection");
require("dotenv").config();
require("colors");

const app = express();

connectedDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routers/registerUser"));

app.use(errorhandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on Port: ${process.env.PORT.bgMagenta}`)
);
