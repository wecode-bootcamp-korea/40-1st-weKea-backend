-- migrate:up
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	birthdate VARCHAR(50),
	phoneNumber VARCHAR(50),
	gender VARCHAR(50),
	address VARCHAR(50),
	email VARCHAR(320),
	password BINARY(72),
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT usersEmailUkey UNIQUE (email),
	PRIMARY KEY(id)
);

-- migrate:down
DROP TABLE users;