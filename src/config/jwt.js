const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.TOKEN_EXPIRY,
};
