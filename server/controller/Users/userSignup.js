const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const userModel = require("../../models/userModels");
const bcrypt = require("bcrypt");

const userSignUpController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await userModel.findOne({ email });

    console.log("req-body", req.body);
    if (user) {
      throw new Error("Already user exists");
    }
    if (!email) {
      throw new Error("Please Provide the email");
    }
    if (!name) {
      throw new Error("Please Provide the name");
    }
    if (!password) {
      throw new Error("Please Provide the password");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hashSync(password, salt);
    if (!hashpassword) {
      throw new Error("Something is wrong");
    }

    const userData = await userModel.create({
      email,
      password: hashpassword,
      name,
      role: "GENERAL",
    });
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User Created Successfully!",
    });
  } catch (err) {
    res.json({
      message: err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSignUpController;
