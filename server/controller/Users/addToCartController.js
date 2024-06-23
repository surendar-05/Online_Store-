const addToCartModel = require("../../models/addToCartModel");

const addToCartController = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      console.error('User not authenticated:', req.user);
      return res.status(401).json({
        message: "User not authenticated",
        error: true,
        success: false,
      });
    }

    const { productId } = req.body;
    const currentUser = req.user.id;

    const isProductAvailable = await addToCartModel.findOne({
      productId,
      userId: currentUser,
    });

    if (isProductAvailable) {
      return res.json({
        message: "Already exists in Add To Cart",
        success: false,
        error: true,
      });
    }

    const payload = {
      productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();
    return res.json({
      data: saveProduct,
      message: "Product Added in Cart",
      success: true,
      error: false,
    });
  } catch (err) {
    console.error('Error in addToCartController:', err);
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
