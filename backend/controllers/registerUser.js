const AsyncHandler = require("express-async-handler");
const User = require("../model/userModle");

const bcrypt = require("bcrypt");

const authregister = AsyncHandler(async (req, res) => {
  const { username, useremail, password, mobilenumber } = req.body;

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
      });
      res.send(createUser);
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
      res.send(findUser);
    }
  }
});

module.exports = {
  authregister,
  authlogin,
};
