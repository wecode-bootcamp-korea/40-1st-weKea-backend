const authService = require("../services/auth.service");

const signUp = async (req, res) => {
  const { name, dateOfBirth, phoneNumber, gender, address, email, password } =
    req.body;
  await authService.signUp(
    name,
    dateOfBirth,
    phoneNumber,
    gender,
    address,
    email,
    password
  );
  res.status(201).end();
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const accessToken = await authService.signIn(email, password);
  res.status(200).json({ accessToken: accessToken });
};

module.exports = { signUp, signIn };
