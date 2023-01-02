const commentDao = require("../models/comment.dao");

const getCommentList = async (productId) => {
  let result = await commentDao.getCommentList(productId);
  return result;
};

const postComment = async (userId, productId, comment, rating) => {
  await commentDao.postComment(userId, productId, comment, rating);
};

const editComment = async (id, userId, productId, comment, rating) => {
  let result = await commentDao.editComment(
    id,
    userId,
    productId,
    comment,
    rating
  );
  return result;
};

const deleteComment = async (id, userId, productId) => {
  let result = await commentDao.deleteComment(id, userId, productId);
  return result;
};

module.exports = {
  getCommentList,
  postComment,
  editComment,
  deleteComment,
};
