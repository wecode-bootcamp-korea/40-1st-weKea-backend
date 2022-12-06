-- migrate:up
CREATE TABLE product_images (
    id INT NOT NULL AUTO_INCREMENT,
		image_url VARCHAR(1000),
    product_id int,
		PRIMARY KEY(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE product_images;