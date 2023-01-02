const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {
    const jwtoken = req.headers.authorization;

    if (jwtoken != undefined) {
      const decoded = await jwt.verify(jwtoken, process.env.SECRETE_KEY);
      req.decodedJwtPayload = decoded;
    }
  } catch (err) {
    res.status(err.StatusCode || 400).json({ message: err.message });
  }
  next();
};

module.exports = { verifyUser };
