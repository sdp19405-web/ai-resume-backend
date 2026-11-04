const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// 1. Load environment variables from the .env file FIRST
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 2. Middleware configuration
app.use(express.json());
app.use(cors());

// 3. Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy and running!' });
});

// 4. Debug check to confirm if Node is successfully reading your MONGO_URI
console.log("🔍 Checking MONGO_URI from .env:", process.env.MONGO_URI ? "Loaded successfully (hidden for security)" : "UNDEFINED ❌");


// 5. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// 6. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});