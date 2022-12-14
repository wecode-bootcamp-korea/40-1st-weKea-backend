const { getListService }  = require('../services')

const getProductList = async(req, res) => {
  try{

    const categoryName = req.params.category_name;

    if(!categoryName){
        throw new Error("Invalid Key.")
    }
    const result = await getListService.getProductList (categoryName);
      return res.status(200).json({ message : result }) 
  } catch(err) {
      return res.status(err.statusCode || 400).json({ message : err.message})
  }
};

module.exports = { getProductList };