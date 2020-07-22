const router = require("express").Router();
const notesData = require("../db/db.json");



module.exports = function(app) {


  app.get("/api/notes", function(req, res) {
    res.json(notesData);
    console.log("GET Works")
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    notesData.push(newNote);
    res.json(newNote);
    console.log(req);
  });

};
