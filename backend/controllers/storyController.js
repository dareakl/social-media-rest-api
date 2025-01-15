const { CustomError } = require("../middlewares/error");
const Story = require("../models/Story");
const User = require("../models/User");

const createStoryController = async (req, res, next) => {
  const { userId } = req.params;
  const { text } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError("No user found", 404);
    }
    let image = "";
    if (req.file) {
      image = process.env.URL + `/uploads/${req.file.filename}`;
    }
    const newStory = new Story({
      user: userId,
      image,
      text,
    });
    await newStory.save();
    res.status(200).json(newStory);
  } catch (error) {
    next(error);
  }
};

module.exports = { createStoryController };
