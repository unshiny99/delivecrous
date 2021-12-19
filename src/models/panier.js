const mongoose = require("mongoose");

const PlatSchema = new mongoose.Schema({
    id_plat : Number,
    nom : String,
    description : String,
    prix : Number,
    allergene : String
})

const PanierSchema = new mongoose.Schema({
    id_panier : Number,
    plats : [ PlatSchema ]
})

const Plat = mongoose.model('Plat', PlatSchema)
const Panier = mongoose.model('Panier', PanierSchema)

module.exports = {Plat, Panier};