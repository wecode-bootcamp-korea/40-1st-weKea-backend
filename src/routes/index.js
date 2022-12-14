const express = require("express");

const { authRouter } = require("./auth.router");
const { productsRouter } = require("./products.router");
const { productsDetailRouter } = require("./productDetail.router");

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/products", productsRouter);
routes.use("/products", productsDetailRouter);

module.exports = { routes };