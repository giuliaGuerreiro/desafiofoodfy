const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require("./data");

server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(3000, function() {
    console.log("Server is running");
});

server.get("/", function(req, res) {
    return res.render("home", {items: recipes});
});

server.get("/about", function(req, res) {
    return res.render("about");
});

server.get("/recipes", function(req, res) {
    return res.render("recipes", {items: recipes});
});