const express = require("express")

const productController = require('../controllers/product.controller')
const productRouter = express.Router();

productRouter.get(":category_name", productController.getProductList)

module.exports = { productRouter };