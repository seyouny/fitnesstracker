const Router = require("express").Router();
const path = require("path");
const fs = require("fs");

Router.get("/exercise",function(req,res){
    res.sendFile(path.join(__dirname + "/../public/exercise.html"))
})
Router.get("/stats",function(req,res){
    res.sendFile(path.join(__dirname + "/../public/stats.html"))
})

module.exports = Router;