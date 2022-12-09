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
  if (user === undefined) {
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
  } else {
    console.log("[Warning!] - This email already exists!");
  }
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  const result = await bcrypt.compare(password, user.password);
  if (result) {
    const payLoad = {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12 * 3,
      id: user.id,
    };
    const secretKey = process.env.SECRETE_KEY;
    const jwtToken = jwt.sign(payLoad, secretKey);
    console.log(jwtToken);
    return jwtToken;
  }
};

module.exports = { signUp, signIn };
