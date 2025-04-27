const { body } = require("express-validator");

const loginValidationRules = () => {
  return [
    body("username").notEmpty().withMessage("Username is required"),
    body("password")
      .isLength({ max: 30, min: 10 })
      .notEmpty()
      .withMessage("Password is required"),
  ];
};

module.exports = { loginValidationRules };
