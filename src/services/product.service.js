const productDao = require("../models/product.dao")

const getProductList = async (categoryId, filterBy, method) => {
  return await productDao.getProductList(categoryId, filterBy, method);
};

const getProductDetail = async(productId) => {
  return await productDao.getProductDetail(productId)
}

module.exports = {
  getProductList,
  getProductDetail
};