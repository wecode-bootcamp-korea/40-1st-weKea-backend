const productService  = require('../services/product.service')

const getProductList = async(req, res) => {
  try {
    const categoryId = req.params.categoryId
    const filterBy = req.query.filterBy;
    const method = req.query.method;
    const product = await productService.getProductList(
      categoryId,
      filterBy,
      method
    );
    res.status(200).json(product);
    } catch (err) {
      res.status(err.statusCode || 400).json({ message: err.message });
    }
}

const getProductDetail = async(req, res) => {
  try {
    const productId = req.params.productId;
      
    if(!productId) {
        throw new Error("Not Found.")
      }

    const result = await productService.getProductDetail(productId)
    return res.status(200).json(result)
  } catch(err) {
      res.status(err.statusCode || 400).json({ message : err.message });
  }
}

module.exports = {
  getProductList,
  getProductDetail
};