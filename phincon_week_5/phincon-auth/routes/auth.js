const express = require("express");
const router = express.Router();
const { registerUser } = require("@/controllers/auth");
const { bodyValidation, checkDuplicates } = require("@/controllers/validations/auth");
const { verifyEmail } = require("@/controllers/token");

router.post("/register", bodyValidation, checkDuplicates, registerUser);
router.get("/verify-email", verifyEmail);

module.exports = router;