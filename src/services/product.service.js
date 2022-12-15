const productDao = require("../models/product.dao")

const getProductList = async (categoryId) => {
  const result = await productDao.getProductList(categoryId)
  return result
}

const getProductDetail = async(productId) => {
  return await productDao.getProductDetail(productId)
}

module.exports = {
  getProductList,
  getProductDetail
};