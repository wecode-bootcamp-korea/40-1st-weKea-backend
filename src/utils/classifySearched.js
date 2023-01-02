const { appDataSource } = require("../models/data-source");

const classify = async (req, res, next) => {
  try {
    const unclassified = req.query.unclassified;
    const name = await appDataSource.manager.query(
      `
    SELECT
      p.name,
      p.koreanName
    FROM products AS p
    WHERE p.koreanName = ${unclassified};
    `
    );
    const category = await appDataSource.manager.query(
      `
      SELECT 
        c.name
      FROM categories AS c
      WHERE c.name = ${unclassified}
      `
    );
    console.log(name);
    if (name[0] != undefined) {
      req.nameBool = true;
      req.name = unclassified;
    }
    if (category[0] != undefined) {
      req.categoryBool = true;
      req.category = unclassified;
    }
  } catch (err) {
    res.status(err.StatusCode || 400).json({ message: err.message });
  }
  next();
};

module.exports = { classify };
