-- migrate:up
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
		PRIMARY KEY(id)
);

-- migrate:down
DROP TABLE categories;