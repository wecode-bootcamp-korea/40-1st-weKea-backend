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
  try {
    await userDao.getUserByEmail(email);
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
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  if (!user) {
    throw new Error("NONEXISTENT_USER");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("INVALID_USER");
  }
  const payLoad = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12 * 3,
    id: user.id,
  };
  const SECRETE_KEY = process.env.SECRETE_KEY;
  const jwtToken = jwt.sign(payLoad, SECRETE_KEY);
  console.log(jwtToken);
  return jwtToken;
};

module.exports = { signUp, signIn };
