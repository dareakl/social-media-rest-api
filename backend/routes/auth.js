const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const { password, username, email } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      res.status(400).json("Username or email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ ...req.body, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    let user;
    if (req.body.email) {
      user = await User.findOne({ email: req.body.email });
    } else {
      user = await User.findOne({ username: req.body.username });
    }
    if (!user) {
      return res.status(404).json("User not found");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json("wrong credential!");
    }
    res.status(200).json("logged in successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGOUT

//FETCH CURRENT USER

module.exports = router;
