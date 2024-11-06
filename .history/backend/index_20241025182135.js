const express = require("express");
const errorhandler = require("./middleware/errormiddlware");
const connectedDB = require("./config/connection");
require("dotenv").config();
require("colors");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());

connectedDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routers/registerUser"));
app.use("/api/admin", require("./routers/addProduct"));
app.use("/api/customers", require("./routers/customers"));
// app.use("/api/auth", authRoutes);
// app.use("/api", adminRoutes);

app.use(errorhandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on Port: ${process.env.PORT.bgMagenta}`)
);
