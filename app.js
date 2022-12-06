const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { DataSource } = require("typeorm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const appDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch(() => {
    console.log("Error: Data Source initialization has been failed");
  });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.post("/signUp", async (req, res) => {
  const {
    lastName,
    firstName,
    dateOfBirth,
    phoneNumber,
    sex,
    address,
    email,
    password,
  } = req.body;

  const makeHash = async (password, saltRounds) => {
    return await bcrypt.hash(password, saltRounds);
  };

  const hashedPassword = await makeHash(password, 12);

  await appDataSource.query(
    `
    INSERT INTO users (
      last_name, 
      first_name, 
      date_of_birth, 
      phone_number,
      sex,
      address,
      email,
      password
    ) VALUES (?,?,?,?,?,?,?,?);
    `,
    [
      lastName,
      firstName,
      dateOfBirth,
      phoneNumber,
      sex,
      address,
      email,
      hashedPassword,
    ]
  );
  res.status(201).json({ message: "userCreated" });
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await appDataSource.manager.query(
    `
    SELECT 
      email, 
      password
    FROM users
    WHERE email = ?;
    `,
    [email]
  );
  const hashedPassword = userInfo[0].password;

  const checkHash = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  };

  const result = await checkHash(password, hashedPassword);

  if (result) {
    const payLoad = { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12 * 3 };
    const secretKey = process.env.SECRETE_KEY;
    const jwtToken = jwt.sign(payLoad, secretKey);
    console.log(jwtToken);
    res.status(201).json({ accessToken: jwtToken });
  } else {
    res.status(400).json({ messsage: "Invalid user" });
  }
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
