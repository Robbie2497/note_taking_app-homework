const path = require("path");
const router = require("express").Router();

module.exports = function(app) {

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

};
