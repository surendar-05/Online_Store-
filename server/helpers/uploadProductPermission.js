const userModel = require("../models/userModels");

const uploadProductPermission = async (userId) => {
  try {
    console.log(`Checking permissions for userId: ${userId}`);

    const user = await userModel.findById(userId);

    if (!user) {
      console.error(`User not found for userId: ${userId}`);
      throw new Error("User not found");
    }

    if (user.role === "ADMIN") {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error in uploadProductPermission:", error.message);
    return false;
  }
};

module.exports = uploadProductPermission;
