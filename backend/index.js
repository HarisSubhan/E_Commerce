const express = require("express");
const errorhandler = require("./middleware/errormiddlware");
const connectedDB = require("./config/connection");
require("dotenv").config();
require("colors");
const cors = require("cors");

const app = express();

app.use(cors());

connectedDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routers/registerUser"));
app.use("/api/admin", require("./routers/addProduct"));
app.use(errorhandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on Port: ${process.env.PORT.bgMagenta}`)
);
