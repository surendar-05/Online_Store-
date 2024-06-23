const addToCartModel = require("../../models/addToCartModel");

const deleteAddToCartProduct = async (req, res) => {
    try {
        const currentUserId = req.user.id; // Assuming user ID is available in req.user
        const addToCartProductId = req.body._id; // Corrected to directly access _id from req.body

        // Delete the product from the cart
        const deleteProduct = await addToCartModel.deleteOne({
            _id: addToCartProductId,
            userId: currentUserId // Ensure the correct user's cart item is deleted
        });

        res.json({
            message: "Product Deleted From Cart",
            error: false,
            success: true,
            data: deleteProduct
        });
    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = deleteAddToCartProduct;
