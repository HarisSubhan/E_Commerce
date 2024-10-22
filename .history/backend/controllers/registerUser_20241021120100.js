const AsyncHandler = require("express-async-handler");
const User = require("../model/userModle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authregister = AsyncHandler(async (req, res) => {
  const { username, useremail, password, mobilenumber, role } = req.body;

  const checkUser = await User.findOne({ useremail });

  if (checkUser) {
    res.status(400);
    throw new Error("Already Email Exit");
  }

  if (!username || !useremail || !password || !mobilenumber) {
    res.status(400);
    throw new Error("Enter The Relevant Field");
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const createUser = await User.create({
        username,
        useremail,
        password: hashedPass,
        mobilenumber,
        role,
      });
      res.json({
        _id: createUser._id,
        username: createUser.username,
        useremail: createUser.useremail,
        password: createUser.password,
        mobilenumber: createUser.mobilenumber,
        role: createUser.role,
        token: generateToken(createUser._id),
      });
    } catch (error) {
      console.log(error);
    }
  }
});

const authlogin = AsyncHandler(async (req, res) => {
  const { useremail, password } = req.body;
  if (!useremail || !password) {
    res.status(404);
    throw new Error("Please Enter The relevent Field");
  }

  const findUser = await User.findOne({ useremail });

  if (!findUser) {
    res.status(404);
    throw new Error("Please Enter The Valid Email ");
  } else {
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (!passwordMatch) {
      res.status(401);
      throw new Error("Invalid Password");
    } else {
      res.json({
        _id: findUser._id,
        username: findUser.username,
        useremail: findUser.useremail,
        password: findUser.password,
        mobilenumber: findUser.mobilenumber,
        role: findUser.role,
        token: generateToken(findUser._id),
      });
    }
  }
});

const findMyProfile = AsyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const foundUser = await User.findOne({ _id: user_id });
  if (!foundUser) {
    res.send(400);
    throw new Error("user Not Found");
  } else {
    res.send(foundUser);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECERT, {
    expiresIn: "1d",
  });
};

module.exports = {
  authregister,
  authlogin,
  findMyProfile,
};
