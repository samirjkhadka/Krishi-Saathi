const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");
const { error } = require("../utils/responseFormatter");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json(error(401, "Unauthorized"));
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json(error("AUTH_002", "Invalid access token"));
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
