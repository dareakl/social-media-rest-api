const express = require("express");
const router = express.Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: "raja",
      email: "raja@gmail.com",
      password: "123456",
      fullName: "Raja Singh",
      bio: "Hey This is me raja Singh",
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
//LOGIN

//LOGOUT

//FETCH CURRENT USER

module.exports = router;
