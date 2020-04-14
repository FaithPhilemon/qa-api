'use strict';

const express = require('express');
const app = express();


app.use((req, res, next)=>{
    console.log("First Piece of middleware");
    next();
});

app.use("/about/:id", (req, res, next)=>{
    console.log("Second Piece of middleware ID: ", req.params.id);
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Express app is running on port ", port);
});