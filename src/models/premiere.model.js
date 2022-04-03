const mongoose = require("mongoose");

const premiereSchema = new mongoose.Schema({
    Url:{type:String,required:true}, 
});

const Premiere = mongoose.model("premiere", premiereSchema); // user => users

module.exports = Premiere;