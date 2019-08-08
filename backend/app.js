//express app is the tool we use to make creating routes easier
//this will hold the express app
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlenconded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Request_Width, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: "post added successfully"
    });
});

app.use("/api/posts", (req, res, next) => {
    const posts = [
      { id: 'auwd86aw7da', 
        title: 'First server side post', 
        content:'This is coming from the server.' 
      },
      { id: 'awe222adaa', 
        title: 'Second server side post', 
        content:'This is coming from the server!' 
      },
    ];
    res.status(200).json({
        message: 'Posts getched successfully!',
        posts: posts
    });
});

//now we need to export the app.js so server.js can listen
module.exports = app;