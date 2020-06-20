const express = require('express');
const app = express();
// provides utilities for working with file and directory paths
// const path = require('path');
// allows you to group the route handlers for a particular part of a site together and access them using a common route-prefix
const router = express.Router();
app.use(express.static('./'));

// res.json() sends a JSON response
// res.sendFile() sends a file
// res.send() sends a string

router.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

router.get('/contact', function(req,res){
    res.sendFile(__dirname + '/contact.html');
});

router.get('/gallery', function(req,res){
    res.sendFile(__dirname + '/gallery.html');
});

router.get('/guestbook', function(req,res){
    res.sendFile(__dirname + '/guestbook.html');
});

router.get('/index', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

router.get('/links', function(req,res){
    res.sendFile(__dirname + '/links.html');
});

router.get('/my_education', function(req,res){
    res.sendFile(__dirname + '/my_education.html');
});

router.get('/my_projects', function(req,res){
    res.sendFile(__dirname + '/my_projects.html');
});

router.get('/my_story', function(req,res){
    res.sendFile(__dirname + '/my_story.html');
});

router.get('/resume', function(req,res){
    res.sendFile(__dirname + '/resume.html');
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');