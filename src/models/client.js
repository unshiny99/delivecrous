const mongoose = require("mongoose");

const Client = mongoose.model('Client', {
    id_client : Number,
    id_panier : Number,
    nom : String,
    prenom : String,
    password: String
})

module.exports = Client;