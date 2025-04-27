const { validationResult } = require("express-validator");
const { login } = require("../services/auth.service");
const { success, error } = require("../utils/responseFormatter");

async function loginUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(error("AUTH_003", "Validation errors", { errors: errors.array() }));
  }
  const { username, password } = req.body;

  try {
    const { token, user } = await login(username, password);

    return res
      .status(200)
      .json(success("AUTH_200", "Login successful", { token, user }));
  } catch (error) {
    return res
      .status(401)
      .json(error("AUTH_004", "Login failed" + error.message));
  }
}

module.exports = { loginUser };
