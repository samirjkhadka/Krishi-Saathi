const jwt = require("jsonwebtoken");
const { getUserByUsername } = require("../models/auth.Model");
const { error } = require("../utils/responseFormatter");
const { expiresIn } = require("../config/jwt");

async function login(username, password) {
  const user = await getUserByUsername(username);

  if (!user) {
    return error(404, "Invalid username or password");
  }

  const passwordMatch = await comparePassword(password, user.password);

  if (!passwordMatch) {
    return error(404, "Invalid username or password");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    secret,
    {
      expiresIn,
    }
  );
  return success(200, "Login successful", { token, user });
}

module.exports = { login };
