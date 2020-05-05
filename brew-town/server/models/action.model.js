const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({

},{timestamps:true})

const Action = mongoose.model("Action", ActionSchema);

module.exports = Action;

//be sure to change the word ACTION to a more fitting name 