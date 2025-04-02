const express = require('express');

const app = express();

// testing route :
app.get('/', (req, res) =>{
    res.send("Hello World!")
})

module.exports = app;