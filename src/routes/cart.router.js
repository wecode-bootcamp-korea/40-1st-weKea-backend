const express = require("express");
const cartController = require("../controllers/cart.controller");
const { verifyUser } = require("../utils/loginRequired");
const cartRouter = express.Router();

cartRouter.post("/", verifyUser, cartController.createCart);

cartRouter.patch("/", verifyUser, cartController.editCart);

cartRouter.delete("/", verifyUser, cartController.deleteCart);

cartRouter.get("/", verifyUser, cartController.getCart);

module.exports = { cartRouter };
