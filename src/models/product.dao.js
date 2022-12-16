const { appDataSource } = require('./data-source');

const getProductList = async (categoryId, filterBy, method) => {
  if(!filterBy && !method){
    const product = await appDataSource.manager.query(
    `
    SELECT
      id,
      name,
      koreanName,
      price,
      rating,
      thumbnailUrl,
      exampleImageUrl
    FROM products 
    WHERE categoryId = ?;
    `,
    [categoryId]
  );
  return product;
  } else {
    const product = await appDataSource.manager.query(
    `
    SELECT
      id,
      name,
      koreanName,
      price,
      rating,
      thumbnailUrl,
      exampleImageUrl
    FROM products
    WHERE categoryId = ?
    ORDER BY ${filterBy} ${method};
    `,
    [categoryId]
    );
    return product;
    }
};

const getProductDetail = async (productId) => {
  return await appDataSource.query(
    `
    SELECT
      p.id,
      p.name,
      p.koreanName,
      p.price,
      p.productCode,
      p.description,
      p.rating,
      pi.imageUrl
    FROM products p
    JOIN product_images pi ON pi.productId = p.id
    WHERE p.id = ?;
    `,
    [productId]
  )
}

  module.exports = {
    getProductList,
    getProductDetail
  };