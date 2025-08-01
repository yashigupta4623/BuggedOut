require('dotenv').config();

const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // For dev: allow all origins; tighten later in prod

// Test route
app.get('/', (req, res) => {
  res.send("Hello World!");
});

// AI routes
app.use('/ai', aiRoutes);

module.exports = app;
