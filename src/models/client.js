const mongoose = require("mongoose");

const Client = mongoose.model('Client', {
    _id : Number,
    username : String,
    nom : String,
    prenom : String
})

module.exports = Client;