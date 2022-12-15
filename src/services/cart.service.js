const cartDao = require("../models/cart.dao");

const createCart = async (userId, productId) => {
  const checkCart = await cartDao.checkItemInTheCart(userId, productId);
  if (checkCart[0] === undefined) {
    console.log("New item!");
    await cartDao.putItemIntoCart(userId, productId);
  } else {
    console.log("Item exits. Adding one more!");
    await cartDao.addOneMore(userId, productId);
  }
};

const editCart = async (userId, productId, quantity) => {
  await cartDao.editNumberOfItem(userId, productId, quantity);
};

const deleteCart = async (userId, productId) => {
  return await cartDao.deleteItemFromTheCart(userId, productId);
};

const getCart = async (userId) => {
  return await cartDao.getAllItemSelectedByTheUser(userId);
};

module.exports = { createCart, editCart, deleteCart, getCart };
