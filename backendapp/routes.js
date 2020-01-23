var About = require("./models/about.js");
module.exports = function(expobj) {
  expobj.get("api/abouts", function(req, res) {
    About.find(function(err, about) {
      if (err) {
        res.send(err);
      }
      res.json(about);
    });
  });

  expobj.get("*", function(req, res) {
    res.sendfile("./public/index.html");
  });
};
