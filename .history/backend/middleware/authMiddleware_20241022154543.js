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

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Admin access denied" });
    }
    next();
  } catch (error) {
    console.log(error.message);
    res
      .status(401)
      .send({ success: false, error, message: "Error in admin Middleware" });
  }
};

module.exports = { authMiddleware, adminMiddleware };
