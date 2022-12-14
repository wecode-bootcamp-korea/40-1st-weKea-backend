const productDao = require("../models/product.dao");

const getProductList = async (categoryId, page, limit, filterBy, method) => {
  return await productDao.getProductList(
    categoryId,
    page,
    limit,
    filterBy,
    method
  );
};

const getProductDetail = async (productId) => {
  return await productDao.getProductDetail(productId);
};

const getSearched = async (isName, searched, filterBy, method) => {
  return await productDao.searchProduct(isName, searched, filterBy, method);
};

module.exports = {
  getProductList,
  getProductDetail,
  getSearched,
};
