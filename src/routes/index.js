const express = require("express");

const { authRouter } = require("./auth.router");
const { productRouter } = require("./products.router");

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/products", productRouter);

module.exports = routes;