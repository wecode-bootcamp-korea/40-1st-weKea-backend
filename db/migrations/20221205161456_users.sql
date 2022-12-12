-- migrate:up
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	birthdate VARCHAR(50) NOT NULL,
	phoneNumber VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	address VARCHAR(50) NOT NULL,
	email VARCHAR(320) NOT NULL,
	password BINARY(72) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT usersEmailUkey UNIQUE (email),
	PRIMARY KEY(id)
);

-- migrate:down
DROP TABLE users;