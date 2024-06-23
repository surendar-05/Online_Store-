const uploadProductPremission = require("../../helpers/uploadProductPermission");
const productModel = require("../../models/productModel");

const uploadProduct = async (req, res) => {
  try {
    const sessionUserId = req.userId;

    if (!uploadProductPremission(sessionUserId)) {
      throw new Error("Permission Denied");
    }

    const uploadProduct = new productModel(req.body);
    const saveProduct = await uploadProduct.save();
    res.status(201).json({
      message: "Product Upload Successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = uploadProduct;
