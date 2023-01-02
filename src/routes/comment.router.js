const express = require("express");

const commentController = require("../controllers/comment.controller");
const { verifyUser } = require("../utils/loginRequired");
const commentRouter = express.Router();

commentRouter.get("/:productId", commentController.getCommentList);
commentRouter.post("/:productId", verifyUser, commentController.postComment);
commentRouter.patch("/:productId", verifyUser, commentController.editComment);
commentRouter.delete(
  "/:productId",
  verifyUser,
  commentController.deleteComment
);

module.exports = { commentRouter };
