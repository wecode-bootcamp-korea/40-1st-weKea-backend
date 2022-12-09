-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  product_id int NOT NULL,
  quantity int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE carts;