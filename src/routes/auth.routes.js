const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/auth.controller");
const { loginValidationRules } = require("../validators/authValidators");

router.post("/login", loginValidationRules(), loginUser);

module.exports = router;
