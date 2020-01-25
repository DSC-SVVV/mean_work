var About = require("./models/contacts");
// var Contacts = require("./models/contacts");

module.exports = function(expobj) {
  //add contact--------------------------------------------
  expobj.post("/api/abouts", (req, res) => {
    console.log(
      "First Name:" +
        req.body.first_name +
        "\nLast Name:" +
        req.body.last_name +
        "\nContact Number:" +
        req.body.phone
    );

    //logic to add contact-----------------------------------------------------
    let newContact = new About({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone
    });

    newContact.save(function(err, contact) {
      if (err) {
        res.json({ msg: "Failed to add contact" });
      } else {
        res.json({ msg: "Contact added successfully" });
      }
    });
  });

  //show contact---------------------------------------------------------------
  expobj.get("/api/abouts/", function(req, res) {
    About.find(function(err, abouts) {
      if (err) {
        res.send(err);
      }
      res.json(abouts);
    });
  });

  //update contact--------------------------------------------------------------
  //To get individual data to update from databse to server
  expobj.get("/api/abouts/:id", function(req, res) {
    About.find({ _id: req.params.id }, function(err, dataoupd) {
      if (err) {
        res.send(err);
      }
      res.json(dataoupd);
    });
  });

  //To put individual data to update from server to database
  expobj.put("/api/abouts/:id", function(req, res) {
    //logic to update contact
    console.log("Updated Data" + req.body._id + " " + req.body.first_name);
    About.update(
      { _id: req.body._id },
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone
        }
      },
      {
        multi: true
      },
      function(err, update) {
        if (err) {
          res.send(err);
        } else {
          res.json(update);
        }
      }
    );
  });
  //delete data --------------------------------------------
  expoobj.remove();

  // --------------------------------------------------------------------
  expobj.get("*", function(req, res) {
    res.sendfile("./public/index.html");
  });
};
