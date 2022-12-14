const productService  = require('../services/product.service')

const getProductList = async(req, res) => {
  try {
    const categoryId = req.params.categoryId;

    if(!categoryId){
        throw new Error("Invalid Key.")
    }
    const result = await productService.getProductList(categoryId)
    return res.status(200).json({ productInfo : result }) 
  } catch(err) {
      return res.status(err.statusCode || 400).json({ message : err.message })
  }
};

const getProductDetail = async(req, res) => {
  try {
    const productId = req.params.productId;
      
    if(!productId) {
        throw new Error("Not Found.")
      }

      const result = await productService.getProductDetail(productId)
      return res.status(200).json({ productDetails : result })
  } catch(err) {
        res.status(err.statusCode || 400).json({ message : err.message });
  }
}

module.exports = {
  getProductList,
  getProductDetail
};