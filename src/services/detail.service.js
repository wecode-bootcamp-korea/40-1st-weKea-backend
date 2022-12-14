const productDetailDao = require('../models/productDetail.dao')

const getProductDetail = async(product_id) => {
  return productDetailDao.getProductDetail(product_id)
};

module.exports = { getProductDetail };