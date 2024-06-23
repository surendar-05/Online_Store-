const bcrypt = require("bcrypt");
const userModel = require("../../models/userModels");
const jwt = require("jsonwebtoken");

const userSigninController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please Provide the email");
    }

    if (!password) {
      throw new Error("Please Provide the password");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not Found");
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    console.log("checkPassword:", checkPassword);
    if (!checkPassword) {
      throw new Error("please check the password");
    } else {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "8h",
      });

      const tokenOption = {
        httpOnly: true,
        secure: true, // Set to true if using HTTPS
      };
      res.cookie("token", token, tokenOption).json({
        message: "Login Successfully",
        data: token, // Set the token as the value of the cookie
        success: true,
        error: false,
      });
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSigninController;
