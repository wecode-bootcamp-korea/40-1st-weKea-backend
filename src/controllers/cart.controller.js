const cartService = require("../services/cart.service");

const putItem = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = res.locals.payload.id;
    await cartService.putItem(userId, productId);
    res.status(201).json({ message: "Item has been put into the cart!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const editItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = res.locals.payload.id;
    await cartService.editItem(userId, productId, quantity);
    res.status(201).json({ message: "Number of item has been edited!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = res.locals.payload.id;
    await cartService.deleteItem(userId, productId);
    res.status(201).json({ message: "Item has been deleted from the cart!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const getItem = async (req, res) => {
  try {
    const userId = res.locals.payload.id;
    const products = await cartService.getItem(userId);
    console.log(products);
    res.status(201).send(products);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { putItem, editItem, deleteItem, getItem };
