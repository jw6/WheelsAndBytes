const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:37018/wheelsandbytes"),
{
  keepAlive: true
}

module.exports.User = require("./user");