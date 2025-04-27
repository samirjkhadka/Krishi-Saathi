const { validationResult } = require("express-validator");
const { login } = require("../services/auth.service");
const { successResponse, errorResponse } = require("../utils/responseFormatter");


async function loginUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .json(errorResponse("AUTH_003", "Validation errors", { errors: errors.array() }));
  }
  const { username, password } = req.body;
  console.log('Req: ',req.body);
  try {
    const { token, user } = await login(username, password);
    console.log('_token: ',token);
    console.log('_user: ',user);
    return res.json(successResponse("AUTH_001", "Login successful", { token, user }));
  } catch (error) {
    console.log(error);
    return res
      .json(errorResponse("AUTH_004", "Login failed: " + error.message));
  }
}

module.exports = { loginUser };
