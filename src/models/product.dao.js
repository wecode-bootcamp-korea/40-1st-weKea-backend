const { appDataSource } = require('./data-source');

//Get Product list by categories
const getProductList = async (categoryName) => {
  return await appDatasource.query(
    `
    SELECT
      p.name,
      p.price,
      p.description,
      p.rating,
      p.thumbnailUrl,
      p.exampleImageUrl
      c.name as categoryName
    FROM products p
    INNER JOIN categories On c.id = p.categoryId
    WHERE p.categoryId = ?
    `,
    [categoryName]
  )};

  module.exports = { getProductList };