const commentService = require("../services/comment.service");

const getCommentList = async (req, res) => {
  try {
    const productId = req.params.productId;
    const comment = await commentService.getCommentList(productId);
    res.status(200).json(comment);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const postComment = async (req, res) => {
  try {
    const userId = req.decodedJwtPayload.id;
    const productId = req.params.productId;
    const comment = req.body.comment;
    const rating = req.body.rating;
    if (!productId) {
      throw new Error("Not Found.");
    }
    await commentService.postComment(userId, productId, comment, rating);
    return res.status(201).json({ message: "Comment has been posted!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const editComment = async (req, res) => {
  try {
    const id = req.body.id;
    const userId = req.decodedJwtPayload.id;
    const productId = req.params.productId;
    const comment = req.body.comment;
    const rating = req.body.rating;
    if (!productId) {
      throw new Error("Not Found.");
    }
    await commentService.editComment(id, userId, productId, comment, rating);
    return res.status(201).json({ message: "comment has been edited!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const id = req.body.id;
    const userId = req.decodedJwtPayload.id;
    const productId = req.params.productId;
    if (!productId) {
      throw new Error("Not Found.");
    }
    await commentService.deleteComment(id, userId, productId);
    return res.status(200).json({ message: "comment has been deleted!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = {
  getCommentList,
  postComment,
  editComment,
  deleteComment,
};
