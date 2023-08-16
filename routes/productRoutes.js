import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  filterProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/filter-product", filterProductController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search-product/:keyword",searchProductController);

//similar product
router.get("/related-product/:pid/:cid",relatedProductController);

//category wise product
router.get("/product-category/:slug",productCategoryController);

//payments route (token milta hai taki hamara merchant ka account verify before payment)
//token
router.get("/braintree/token",braintreeTokenController);

//payments
router.post("/braintree/payment",requireSignIn,brainTreePaymentController);



export default router;