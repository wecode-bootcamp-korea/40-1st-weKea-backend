const express = require("express");
const { classify } = require("../utils/classifySearched");

const productController = require("../controllers/product.controller");
const productRouter = express.Router();

productRouter.get("/category/:categoryId", productController.getProductList);
productRouter.get("/detail/:productId", productController.getProductDetail);
productRouter.get("/search", classify, productController.getSearchedProducts);

module.exports = { productRouter };
