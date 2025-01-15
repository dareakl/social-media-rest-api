# Social Media REST API

A RESTful API for a social media platform built with **Node.js** and **Express**. This API supports various features such as authentication, user management, post creation, comments, stories, conversations, and messaging.

## Features

- **Authentication**: User registration, login, and JWT token-based authentication.
- **User Management**: Create, update, delete user profiles.
- **Posts**: Create, edit, delete, and view posts.
- **Comments**: Add comments to posts.
- **Stories**: Upload and view user stories.
- **Conversations**: Start and manage conversations between users.
- **Messages**: Send and receive messages in conversations.

## Technologies Used

- **Node.js**: JavaScript runtime for the server-side logic.
- **Express.js**: Web framework for building the API.
- **MongoDB**: Database for storing user data, posts, comments, messages, etc.
- **JWT (JSON Web Tokens)**: For authentication and authorization.
- **Multer**: Middleware for handling file uploads (e.g., profile pictures, stories).
- **dotenv**: For managing environment variables.
- **cookie-parser**: For parsing cookies.
- **Bcrypt**: For hashing user passwords.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud, such as MongoDB Atlas)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/social-media-rest-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd social-media-rest-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables. Create a `.env` file in the root directory and add the following:

    ```
    PORT=5000
    MONGO_URI=<your-mongo-db-uri>
    JWT_SECRET=<your-secret-key>
    ```

5. Start the development server:

    ```bash
    npm start
    ```

    The API should now be running on `http://localhost:5000`.

## Endpoints

Here are some of the key API endpoints:

### Authentication

- **POST** `/api/auth/register` - Register a new user.
- **POST** `/api/auth/login` - Log in and obtain a JWT token.

### Users

- **GET** `/api/user/:id` - Get user details by ID.
- **PUT** `/api/user/:id` - Update user details (requires authentication).
- **DELETE** `/api/user/:id` - Delete user account (requires authentication).

### Posts

- **POST** `/api/post` - Create a new post (requires authentication).
- **GET** `/api/post/:id` - Get a specific post by ID.
- **PUT** `/api/post/:id` - Edit a post (requires authentication).
- **DELETE** `/api/post/:id` - Delete a post (requires authentication).

### Comments

- **POST** `/api/comment` - Add a comment to a post (requires authentication).
- **GET** `/api/comment/:postId` - Get all comments for a specific post.
- **DELETE** `/api/comment/:id` - Delete a comment (requires authentication).

### Stories

- **POST** `/api/story` - Upload a new story (requires authentication).
- **GET** `/api/story/:userId` - Get all stories by a user.

### Conversations & Messages

- **POST** `/api/conversation` - Start a new conversation (requires authentication).
- **GET** `/api/conversation/:userId` - Get all conversations for a user.
- **POST** `/api/message` - Send a message in a conversation (requires authentication).
- **GET** `/api/message/:conversationId` - Get all messages in a conversation.

## Error Handling

The API includes a global error handler that returns standardized error responses in the following format:

```json
{
  "status": "error",
  "message": "Error message here"
}
