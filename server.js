const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require("./data");

server = express();

server.use(express.static('public'));

server.set("view engine", "html");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(3000, function() {
    console.log("Server is running");
});

server.get("/", function(req, res) {
    return res.render("home");
});

server.get("/about", function(req, res) {
    return res.render("about");
});

server.get("/recipes", function(req, res) {
    return res.render("recipes");
});