const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  createPostController,
  createPostWithImagesController,
  updatePostController,
  getPostsController,
} = require("../controllers/postController");

//CREATE POST
router.post("/create", createPostController);

//CREATE POST WITH IMAGES
router.post(
  "/create/:userId",
  upload.array("images", 5),
  createPostWithImagesController
);

//UPDATE POST
router.put("/update/:postId", updatePostController);

//GET ALL POSTS
router.get("/all/:userId", getPostsController);

module.exports = router;
