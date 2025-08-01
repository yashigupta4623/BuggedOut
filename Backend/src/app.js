const express = require('express');
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    // origin: 'https://bugged-out.vercel.app/"
  }));

// testing route :
app.get('/', (req, res) =>{
    res.send("Hello World!")
})

app.use('/ai', aiRoutes)

module.exports = app;
