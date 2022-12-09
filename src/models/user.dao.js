const { appDataSource } = require("./data-source");

const createUser = async (
  name,
  dateOfBirth,
  phoneNumber,
  gender,
  address,
  email,
  password
) => {
  await appDataSource.query(
    `
    INSERT INTO users (
      name,
      date_of_birth,
      phone_number,
      gender,
      address,
      email,
      password
    ) VALUES (?,?,?,?,?,?,?)
    `,
    [name, dateOfBirth, phoneNumber, gender, address, email, password]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
    SELECT *
    FROM users u
    WHERE u.email = ?
  `,
    [email]
  );
  return user;
};

module.exports = { createUser, getUserByEmail };
