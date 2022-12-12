const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");

const signUp = async (
  name,
  birthdate,
  phoneNumber,
  gender,
  address,
  email,
  password
) => {
  const user = await userDao.getUserByEmail(email);

  if (user) {
    throw new Error("USER_ALREADY_EXIST");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(
    name,
    birthdate,
    phoneNumber,
    gender,
    address,
    email,
    hashedPassword
  );
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  if (!user) {
    throw new Error("NONEXISTENT_USER");
  }
  const isMatch = await bcrypt.compare(password, user.password.toString());
  if (!isMatch) {
    throw new Error("INVALID_USER");
  }
  const payLoad = {
    id: user.id,
  };
  const SECRETE_KEY = process.env.SECRETE_KEY;
  const jwtToken = jwt.sign(payLoad, SECRETE_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });
  console.log(jwtToken);
  return jwtToken;
};

module.exports = { signUp, signIn };
