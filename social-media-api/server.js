//Require express, mongodb, and dotenv.
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();


//Load environment variables from the .env file.
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;    

//Create an Express app instance.
const app = express();  
app.use(express.json());


// Create a new MongoClient
const client = new MongoClient(MONGO_URI);

//Use the MongoClient to connect to the database 

async function startServer() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected successfully to MongoDB');
  // Simple GET route to verify connection
    app.get('/', (req, res) => {
      res.json({message:"Successfully connected to the database!"});
    });
    //  Start the server after a successful connection
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    //500 Internal Server Error
    app.get('/', (req, res) => {
      res.status(500).json({message:"Failed to connect to the database."});
    });
 // Start the server anyway so the route above can actually send the 500 error
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (Database Error)`);
    });
  }
}
// Start the server
startServer();