const addToCartModel = require("../../models/addToCartModel");

const updateAddToCartProduct = async (req, res) => {
    try {
        const currentUserId = req.user.id; // Assuming user ID is available in req.user
        const addToCartProductId = req.body._id; // Corrected to directly access _id from req.body
        const qty = req.body.quantity;

        // Update the product quantity in the cart
        const updateProduct = await addToCartModel.updateOne(
            { _id: addToCartProductId, userId: currentUserId }, // Include userId to ensure the correct user's cart is updated
            { $set: { quantity: qty } } // Ensure quantity is updated only if provided
        );

        res.json({
            message: "Product Updated",
            data: updateProduct,
            error: false,
            success: true
        });
    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = updateAddToCartProduct;
