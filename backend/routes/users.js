const express = require("express");
const {
  getUserController,
  updateUserController,
  followUserController,
  unfollowUserController,
} = require("../controllers/userController");
const router = express.Router();

//GET USER
router.get("/:userId", getUserController);

//UPDATE USER
router.put("/update/:userId", updateUserController);

//FOLLOW USER
router.post("/follow/:userId", followUserController);

//UN FOLLOW USER
router.post("/unfollow/:userId", unfollowUserController);

module.exports = router;
