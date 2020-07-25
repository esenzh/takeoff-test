const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = Router();

router.post(
  "/signup",
  [
    body("email", "invalid type of email").isEmail(),
    body("password", "Minimum symbol of password is 6").isLength({ min: 6 }),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          erorrs: errors.array(),
          message: "Invalid inputs during registration",
        });
      }
      const { name, email, password } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "This email exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 5);
      const user = new User({ name, email, password: hashedPassword });
      req.session.user = user;
      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong in server, try again" });
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Please, enter valid email").normalizeEmail().isEmail(),
    body("password", "Enter password").exists(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          erorrs: errors.array(),
          message: "Invalid inputs during sign in",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password, try again" });
      }
      req.session.user = user;
      res.status(200).json({ message: "Access granted" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong in server, try again" });
    }
  }
);

module.exports = router;
