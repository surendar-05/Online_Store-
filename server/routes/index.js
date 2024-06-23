const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/Users/userSignup.js");
const userSigninController = require("../controller/Users/userSignin.js");
const userDetailsController = require("../controller/Users/userDetails.js");
const authToken = require("../middleware/authToken.js");
const userLogout = require("../controller/Users/userLogout.js");
const allUsers = require("../controller/Users/allUsers.js");
const UpdateUser = require("../controller/Users/UpdateUser.js");
const uploadProduct = require("../controller/Products/uploadProduct.js");
const getProduct = require("../controller/Products/getProduct.js");
const updateProduct = require("../controller/Products/updateProduct.js");
const getCategoryProductOne = require("../controller/Products/getCategoryProductOne.js");
const getCategoryWiseProduct = require("../controller/Products/getCategoryWiseProduct.js");
const addToCartController = require("../controller/Users/addToCartController.js");
const countAddToCartController = require("../controller/Users/countAddToCartController.js");
const addToCartViewProduct = require("../controller/Users/addToCartViewProduct.js");
const updateAddToCartProduct = require('../controller/Users/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/Users/deleteAddToCartProduct')


router.post("/signup", userSignUpController);
router.post("/signin", userSigninController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//Admin Panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, UpdateUser);

//product
router.post("/upload-product", authToken, uploadProduct);
router.get("/get-product", getProduct);
router.post("/update-product", authToken, updateProduct);
router.get("/get-categoryProduct", getCategoryProductOne);
router.post("/category-product", getCategoryWiseProduct);

//user Add To Cart
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartController);
router.get("/view-cart-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


module.exports = router;
