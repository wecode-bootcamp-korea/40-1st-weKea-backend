const express = require("express");

const { authRouter } = require("./auth.router");
const { cartRouter } = require("./cart.router");
const { productRouter } = require("./products.router");
const { commentRouter } = require("./comment.router");

const routes = express.Router();

routes.use("/cart", cartRouter);
routes.use("/auth", authRouter);
routes.use("/products", productRouter);
routes.use("/comments", commentRouter);

module.exports = routes;
