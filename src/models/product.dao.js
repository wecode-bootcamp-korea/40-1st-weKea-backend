const { appDataSource } = require('./data-source');

const getProductList = async (categoryId) => {
  return await appDataSource.query(
    `
    SELECT
      p.id,
      p.name,
      p.price,
      p.rating,
      p.thumbnailUrl,
      p.exampleImageUrl,
      c.name
    FROM products p
    INNER JOIN categories c ON c.id = p.categoryId
    WHERE p.categoryId = ?
    `,
    [categoryId]
  )};

const getProductDetail = async (productId) => {
  return await appDataSource.query(
    `
    SELECT
      p.id,
      p.name,
      p.price,
      p.productCode,
      p.description,
      p.rating,
      pi.imageUrl
    FROM products p
    JOIN product_images pi ON pi.productId = p.id
    WHERE p.id = ?
    `,
    [productId]
  )
}

  module.exports = {
    getProductList,
    getProductDetail
  };