const { body } = require("express-validator");

const loginValidationRules = () => {
  return [
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password")
      .isLength({ max: 30, min: 10 })
      .notEmpty()
      .withMessage("Password is required"),
  ];
};

module.exports = { loginValidationRules };
