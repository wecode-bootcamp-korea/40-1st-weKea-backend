-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    price DECIMAL(10, 2),
    product_code VARCHAR(50),
    thumbnail_url VARCHAR(50), 
    example_image_url VARCHAR(1000),
    rating int, 
    description text, 
    stock int, 
    category_id int,    
		PRIMARY KEY(id),
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

-- migrate:down
DROP TABLE products;