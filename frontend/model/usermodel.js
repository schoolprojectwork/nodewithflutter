const mongoose = require("mongoose");
const db = require("../config/db");

const schemaDefined = new mongoose.Schema({
    name:String
});

const ModelName = mongoose.model("data",schemaDefined);

module.exports= ModelName;