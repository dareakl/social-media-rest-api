const { CustomError } = require("../middlewares/error");
const Post = require("../models/Post");
const User = require("../models/User");

const createPostController = async (req, res, next) => {
  const { userId, caption } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError("User not found", 404);
    }
    const newPost = new Post({
      user: userId,
      caption,
    });
    await newPost.save();
    user.posts.push(newPost._id);
    await user.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    next(error);
  }
};

const generateFileUrl = (filename) => {
  return process.env.URL + `/uploads/${filename}`;
};

const createPostWithImagesController = async (req, res, next) => {
  const { userId } = req.params;
  const { caption } = req.body;
  const files = req.files;

  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError("User not found!", 404);
    }
    const imageUrls = files.map((file) => generateFileUrl(file.filename));
    const newPost = new Post({
      user: userId,
      caption,
      image: imageUrls,
    });

    await newPost.save();
    user.posts.push(newPost._id);
    await user.save();
    res
      .status(201)
      .json({ message: "Post created successfully!", post: newPost });
  } catch (error) {
    next(error);
  }
};

const updatePostController = async (req, res, next) => {
  const { postId } = req.params;
  const { caption } = req.body;

  try {
    const postToUpdate = await Post.findById(postId);
    if (!postToUpdate) {
      throw new CustomError("Post not found", 404);
    }
    postToUpdate.caption = caption || postToUpdate.caption;
    await postToUpdate.save();
    res
      .status(200)
      .json({ message: "Post Update Successfully!", post: postToUpdate });
  } catch (error) {
    next(error);
  }
};

const getPostsController = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError("User not found!", 404);
    }

    const blockedUserIds = user.blockList.map((id) => id.toString());

    const allPosts = await Post.find({
      user: { $nin: blockedUserIds },
    }).populate("user", "username fullName profilePicture");
    res.status(200).json({ posts: allPosts });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createPostController,
  createPostWithImagesController,
  updatePostController,
  getPostsController,
};
