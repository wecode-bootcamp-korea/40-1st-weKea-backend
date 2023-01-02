const { appDataSource } = require("./data-source");

const getCommentList = async (productId) => {
  const commentList = await appDataSource.query(
    `
    SELECT 
      c.id,
      c.comment, 
      c.rating, 
      u.name
    FROM comments AS c
    INNER JOIN users AS u
    ON c.userId = u.id
    WHERE c.productId = ${productId};
    `
  );
  return commentList;
};

const postComment = async (userId, productId, comment, rating) => {
  await appDataSource.query(
    `
    INSERT INTO comments (
      userId,
      productId,
      comment,
      rating
    ) VALUES (${userId}, ${productId}, '${comment}', ${rating})
  `
  );
};

const editComment = async (id, userId, productId, comment, rating) => {
  const editedComment = await appDataSource.query(
    `
    UPDATE comments 
    SET comment = '${comment}', rating = ${rating}
    WHERE userId = ${userId} AND productId = ${productId} AND id = ${id};
    `
  );
  return editedComment;
};

const deleteComment = async (id, userId, productId) => {
  await appDataSource.query(
    `
    DELETE 
    FROM comments
    WHERE userId = ${userId} AND productId = ${productId} AND id = ${id}
    `
  );
};

module.exports = {
  getCommentList,
  postComment,
  editComment,
  deleteComment,
};
