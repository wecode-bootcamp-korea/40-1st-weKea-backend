const { appDataSource } = require("./data-source");

const createUser = async (
  name,
  birthdate,
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
      birthdate,
      phoneNumber,
      gender,
      address,
      email,
      password
    ) VALUES (?,?,?,?,?,?,?)
    `,
    [name, birthdate, phoneNumber, gender, address, email, password]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
    SELECT 
      u.id,
      u.name,
      u.email,
      u.password
    FROM users u
    WHERE u.email = ?
  `,
    [email]
  );
  return user;
};

module.exports = { createUser, getUserByEmail };
