const router = require("express").Router();
const notesData = require("../db/db.json");
const fs = require("fs");
const db = require("../db/db.json")



module.exports = function(app) {


  app.get("/api/notes", function(req, res) {
    res.json(notesData);
    console.log("GET Works")
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = Date.now();
    notesData.push(newNote);
    console.log(req);
    fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(notesData), function(err) {
      if (err) throw err;
      res.json(newNote);
    })

  });

  app.delete("/api/notes/:id", function(req, res) {
    db.notesData.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(notesData) {
        res.json(notesData);
      });
  });
    

};
