const { appDataSource } = require("./data-source");

const getProductList = async (categoryId, page, limit, filterBy, method) => {
  const _limit = page * limit;
  if (!filterBy && !method) {
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
    LIMIT ${_limit};
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
    ORDER BY ${filterBy} ${method}
    LIMIT ${_limit};
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
  );
};

const searchProduct = async (isName, searched, filterBy, method) => {
  const _limit = page * limit;
  if (!isName && !filterBy && !method) {
    let product = await appDataSource.manager.query(
      `
    SELECT
      p.id,
      p.name,
      p.koreanName,
      p.price,
      p.rating,
      p.thumbnailUrl,
      p.exampleImageUrl
    FROM products AS p
    INNER JOIN categories AS c 
    ON c.id = p.categoryId 
    WHERE c.name = ${searched}
    LIMIT ${_limit};
    `
    );
    return product;
  } else if (!isName && filterBy && method) {
    let product = await appDataSource.manager.query(
      `
    SELECT
      p.id,
      p.name,
      p.koreanName,
      p.price,
      p.rating,
      p.thumbnailUrl,
      p.exampleImageUrl
    FROM products AS p
    INNER JOIN categories AS c 
    ON c.id = p.categoryId 
    WHERE c.name = ${searched}
    ORDER BY ${filterBy} ${method}
    LIMIT ${_limit};
    `
    );
    return product;
  } else if (isName && !filterBy && !method) {
    let product = await appDataSource.manager.query(
      `
    SELECT
      p.id,
      p.name,
      p.koreanName,
      p.price,
      p.rating,
      p.thumbnailUrl,
      p.exampleImageUrl
    FROM products AS p
    WHERE p.koreanName = ${searched}
    LIMIT ${_limit};
    `
    );
    return product;
  } else if (isName && filterBy && method) {
    let product = await appDataSource.manager.query(
      `
    SELECT
      p.id,
      p.name,
      p.koreanName,
      p.price,
      p.rating,
      p.thumbnailUrl,
      p.exampleImageUrl
    FROM products AS p
    WHERE p.koreanName = ${searched}
    ORDER BY ${filterBy} ${method}
    LIMIT ${_limit};
    `
    );
    return product;
  } else {
    let product = undefined;
    return product;
  }
};

module.exports = {
  getProductList,
  getProductDetail,
  searchProduct,
};
