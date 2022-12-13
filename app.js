require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { appDataSource } = require("./src/models/data-source");
const { routes } = require("./src/routes");

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

app.use(routes);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
