const express = require("express");
const {
  getUserController,
  updateUserController,
  followUserController,
  unfollowUserController,
  blockUserController,
  unblockUserController,
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

//BLOCK USER
router.post("/block/:userId", blockUserController);

//UNBLOCK USER
router.post("/unblock/:userId", unblockUserController);

module.exports = router;
