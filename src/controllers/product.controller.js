const productService = require("../services/product.service");

const getProductList = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
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
};

const getProductDetail = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!productId) {
      throw new Error("Not Found.");
    }

    const result = await productService.getProductDetail(productId);
    return res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const getSearchedProducts = async (req, res) => {
  try {
    const filterBy = req.query.filterBy;
    const method = req.query.method;
    if (req.nameBool) {
      const isName = true;
      const name = req.name;
      const result = await productService.getSearched(
        isName,
        name,
        filterBy,
        method
      );
      return res.status(200).json(result);
    } else if (req.categoryBool) {
      const isName = false;
      const category = req.query.unclassified;
      const result = await productService.getSearched(
        isName,
        category,
        filterBy,
        method
      );
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ message: "No matched items!" });
    }
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = {
  getProductList,
  getProductDetail,
  getSearchedProducts,
};
