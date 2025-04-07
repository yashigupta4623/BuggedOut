const express = require('express');
const aiRoutes = require('./routes/ai.routes.js');

const app = express();

app.use(express.json());

// testing route :
app.get('/', (req, res) =>{
    res.send("Hello World!")
})

app.use('/ai', aiRoutes)

module.exports = app;