-- migrate:up
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
		name VARCHAR(50) NOT NULL,
    date_of_birth VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
		email VARCHAR(50) NOT NULL,
		password VARCHAR(100) NOT NULL,
		created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
		CONSTRAINT users_email_ukey UNIQUE (email),
		PRIMARY KEY(id)
);

-- migrate:down
DROP TABLE users;