const express = require("express")

const productController = require('../controllers/product.controller')
const productRouter = express.Router();

productRouter.get("/:categoryId", productController.getProductList)
productRouter.get("/detail/:productId", productController.getProductDetail)

module.exports = { productRouter };