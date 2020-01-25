//grab mongoose module
const mongoose = require("mongoose");

const contacts = new mongoose.Schema({
  first_name: { type: "string", require: true },
  last_name: { type: "string", require: true },
  phone: { type: "string", require: true }
});

module.exports = mongoose.model("contacts", contacts);
