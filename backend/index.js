const express = require("express");
const connectDB = require("./database/db");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const storyRoute = require("./routes/stories");
const path = require("path");
const { errorHandler } = require("./middlewares/error");

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);
app.use("/api/story", storyRoute);

app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// const posts = [
//   { id: 1, title: "First Post", content: "This is first post content" },
//   { id: 2, title: "Second Post", content: "This is second post content" },
//   { id: 3, title: "Third Post", content: "This is third post content" },
// ];

// app.get("/posts", (req, res) => {
//   res.json(posts);
// });

// app.get("/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((p) => p.id === postId);

//   if (!post) {
//     return res.status(404).json({ error: "post not found" });
//   }
//   res.send(post);
// });

// app.post("/posts", (req, res) => {
//   const title = "new post";
//   const content = "this is new post";
//   const newPost = { id: posts.length + 1, title, content };
//   posts.push(newPost);

//   res.status(201).json(newPost);
// });
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server is running");
});
