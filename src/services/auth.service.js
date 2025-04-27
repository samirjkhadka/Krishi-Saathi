const jwt = require("jsonwebtoken");
const { getUserByUsername } = require("../models/auth.Model");
const { error, successResponse, errorResponse } = require("../utils/responseFormatter");
const { secret, expiresIn } = require("../config/jwt");
const { comparePassword } = require("../utils/encryption");

async function login(username, password) {
  const user = await getUserByUsername(username);
  console.log('user: ',user);
  if (!user) {
    return errorResponse(404, "Invalid username or password");
  }

  const passwordMatch = await comparePassword(password, user.password_hash);

  if (!passwordMatch) {
    return errorResponse(404, "Invalid username or password");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    secret,
    {
      expiresIn,
    }
  );
  console.log('token: ',token);
  return { token, user };
}

module.exports = { login };
