const userModel = require("../../models/userModels");


const userDetailsController = async (req,res) => {
  try {
  
   console.log("user id ",req.user.id)
   const user= await userModel.findById(req.user.id)
   res.status(200).json({
    data:user,
    error:false,
    success:true,
    message:"User Details"
   })
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
};
module.exports = userDetailsController;
