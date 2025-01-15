const express = require("express");
const { createStoryController } = require("../controllers/storyController");
const upload = require("../middlewares/upload");
const router = express.Router();

//CREATE STORY
router.post("/create/:userId", upload.single("image"), createStoryController);

module.exports = router;
