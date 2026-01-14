# 📱 Social Media API - MongoDB Connection
A backend foundation built with Node.js, Express, and MongoDB Atlas. This project demonstrates how to securely connect a cloud-hosted NoSQL database to a RESTful API.

🛠 Features
Cloud Database Integration: Uses MongoDB Atlas for scalable data storage.

Environment Security: Protects sensitive database credentials using dotenv.

Asynchronous Connection: Implements async/await for robust database handshakes.

🚀 Installation & Setup
1. Clone & Install
Bash

# Create and enter the directory
mkdir social-media-api
cd social-media-api

## Initialize and install dependencies
npm init -y
npm install express mongodb dotenv
2. Database Configuration
Log in to MongoDB Atlas.

Create a cluster (M0 Free Tier).

Add a Database User and whitelist your IP (or use 0.0.0.0/0).

Copy your Connection String.

3. Environment Variables
Create a .env file in the root directory:

Code snippet

PORT=3001
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/socialDB?retryWrites=true&w=majority
Note: Replace <password> with your actual database user password.

🚦 How to Run
Start the server using Node:

Bash

node server.js
You should see two success messages in your terminal:

✅ Connected successfully to MongoDB

🚀 Server is running on http://localhost:3001