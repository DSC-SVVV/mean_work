var mongoose = require("mongoose");

module.exports = mongoose.model("About", {
  name: { type: "string", default: "" }
});
