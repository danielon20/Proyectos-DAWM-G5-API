const jwt = require("jsonwebtoken");

var config = require('../config/configword')

const verifyToken = (req, res, next) => {
  const token = req.headers["auth"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;