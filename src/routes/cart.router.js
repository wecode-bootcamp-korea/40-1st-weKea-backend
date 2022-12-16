const express = require("express");
const cartController = require("../controllers/cart.controller");
const { verifyUser } = require("../utils/loginRequired");
const cartRouter = express.Router();

cartRouter.post("/insertion", verifyUser, cartController.createCart);

cartRouter.patch("/edition", verifyUser, cartController.editCart);

cartRouter.delete("/deletion", verifyUser, cartController.deleteCart);

cartRouter.get("/retrieval", verifyUser, cartController.getCart);

module.exports = { cartRouter };
