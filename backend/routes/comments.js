const express = require("express");
const {
  createCommentController,
  createCommentReplyController,
} = require("../controllers/commentController");
const router = express.Router();

//CREATE COMMENT
router.post("/create", createCommentController);

//CREATE COMMENT REPLY
router.post("/create/reply/:commentId", createCommentReplyController);

module.exports = router;
