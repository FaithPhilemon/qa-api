'use strict';

const express = require('express');
const app = express();
const jsonParser = require("body-parser").json;


var jasonCheck = (req, res, next)=>{
    if(req.body){
        console.log("The sky is ", req.body.color);
    }else{
        console.log("There is no body property on this request");
    }
    next();
}


app.use(jsonParser());

// app.use((req, res, next)=>{
//     console.log("First Piece of middleware");
//     next();
// });

// app.use("/about/:id", (req, res, next)=>{
//     console.log("Second Piece of middleware ID: ", req.params.id);
//     next();
// });

var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Express app is running on port ", port);
});