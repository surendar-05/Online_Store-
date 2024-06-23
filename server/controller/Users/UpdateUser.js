const userModel = require("../../models/userModels");


const UpdateUser=async(req,res)=>{
    try{
    
    const sessionUser=req.user.id
    const {userId,email,name,role}=req.body

    const payload={
        ...(email&& {email:email}),
        ...(name&& {name:name}),
        ...(role&& {role:role}),
    }
    const user=await userModel.findById(sessionUser)

     console.log("user-role",user.role)

     
    const updateUser=await userModel.findByIdAndUpdate(userId,payload)
   if(updateUser)
   {
    res.json({
        data:updateUser,
        message:"User Updated",
        success:true,
        error:false
    })
   }
    } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports=UpdateUser