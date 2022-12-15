const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  const { jwtoken } = req.headers;
  try {
    await jwt.verify(
      jwtoken,
      process.env.SECRETE_KEY,
      (err, decoded_payload) => {
        if (decoded_payload != undefined) {
          res.locals.payload = decoded_payload;
        }
      }
    );
  } catch (err) {
    res.status(err.StatusCode || 400).json({ message: err.message });
  }
  next();
};

module.exports = { verifyUser };
