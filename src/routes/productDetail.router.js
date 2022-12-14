const express = require("express")

const productDetailController = require('../controllers/productDetail.controller')
const productDetailRouter = express.Router();

productDetailRouter.get('/detail/:productId', productDetailController.getProductDetail);

module.exports = { productDetailRouter };