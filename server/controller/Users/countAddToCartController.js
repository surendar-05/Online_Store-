const addToCartModel = require("../../models/addToCartModel");

const countAddToCartProduct = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      console.error('User not authenticated:', req.user.id);
      return res.status(401).json({
        message: "User not authenticated",
        error: true,
        success: false,
      });
    }

    const userId = req.user.id;

    const count = await addToCartModel.countDocuments({
      userId: userId,
    });

    res.json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
    });
  } catch (error) {
    console.error('Error in countAddToCartProduct:', error);
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = countAddToCartProduct;
