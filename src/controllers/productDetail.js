const productDetail = require('../services/details.service');

const getProductDetail = async(req, res) => {
  try{
    const productCode = req.params.productId;
      if(!productCode) {
        throw new Error("Not Found.")
      }
      const result = await productDetail.getProductDetail(productCode)
        return res.status(200).json({ message : result })
  } catch(err) {
        res.status(err.statusCode || 400).json({ message : err.message});
  }
}

module.exports = { getProductDetail }