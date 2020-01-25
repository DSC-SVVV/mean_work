var mongoose = require("mongoose");
//collection
module.exports = mongoose.model("About", {
  name: { type: "string", default: "" }
});
