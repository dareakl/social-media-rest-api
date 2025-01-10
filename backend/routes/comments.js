const express = require("express");
const {
  createCommentController,
  createCommentReplyController,
  updateCommentController,
  updateReplyCommentController,
} = require("../controllers/commentController");
const router = express.Router();

//CREATE COMMENT
router.post("/create", createCommentController);

//CREATE COMMENT REPLY
router.post("/create/reply/:commentId", createCommentReplyController);

//UPDATE COMMENT
router.put("/update/:commentId", updateCommentController);

//UPDATE REPLY COMMENT
router.put("/update/:commentId/replies/:replyId", updateReplyCommentController);

module.exports = router;
