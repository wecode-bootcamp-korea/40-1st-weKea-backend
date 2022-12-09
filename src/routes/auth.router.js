const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

authRouter.post("/signUp", authController.signUp);
authRouter.post("/signIn", authController.signIn);

module.exports = { authRouter };
