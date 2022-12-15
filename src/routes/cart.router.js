const express = require("express");
const cartController = require("../controllers/cart.controller");
const loginRequired = require("../utils/loginRequired");
const cartRouter = express.Router();

cartRouter.post("/insertion", loginRequired.verifyUser, cartController.putItem);

cartRouter.patch("/edition", loginRequired.verifyUser, cartController.editItem);

cartRouter.delete(
  "/deletion",
  loginRequired.verifyUser,
  cartController.deleteItem
);

cartRouter.get("/retrieval", loginRequired.verifyUser, cartController.getItem);

module.exports = { cartRouter };
