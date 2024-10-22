const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");
const User = require("../model/userModle");

const authMiddleware = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.id);
      next();
    } catch (error) {
      throw new Error("Wrong Token");
    }
  } else {
    throw new Error("No token found");
  }
});

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Admin access denied" });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };
