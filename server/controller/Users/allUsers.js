const userModel = require("../../models/userModels");

const allUsers=async (req, res)=> {
  try {
    console.log("userid all Users", req.user.id);

    const allUsers = await userModel.find();
  
    res.json({
      message: "All User ",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allUsers;
