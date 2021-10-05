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
    id_client : Number,
    plats : [ PlatSchema ]
})

const Client = mongoose.model("Client", {
    id_client : Number,
    id_panier : Number,
    nom : String,
    prenom : String
})

const Plat = mongoose.model("Plat", PlatSchema)
const Panier = mongoose.model("Panier", PanierSchema)

const panier_1_save = new Panier({
    "id_panier" : 1,
    "id_client" : 1,
    "plats": [
        {
            "id_plat" : 1,
            "nom" : "kebab",
            "description" : "kebab complet",
            "prix" : 5,
            "allergene" : "Aucun"
        },
        {
            "id_plat" : 4,
            "nom" : "Menu Enfant",
            "description" : "Menu Enfant, contient : Frite, wrap, boisson",
            "prix" : 10,
            "allergene" : "Aucun"
        },
        {
            "id_plat" : 5,
            "nom" : "Browl Assiatique",
            "description" : "bowl complet assiatique",
            "prix" : 18,
            "allergene" : "Aucun"
        }
    ]
})

const panier_2_save = new Panier({
    "id_panier" : 2,
    "id_client" : 2,
    "plats": [
        {
            "id_plat" : 5,
            "nom" : "Browl Assiatique",
            "description" : "bowl complet assiatique",
            "prix" : 18,
            "allergene" : "Aucun"
        }, 
        {
            "id_plat" : 2,
            "nom" : "Poisson deluxe",
            "description" : "poisson de multiple origine",
            "prix" : 15,
            "allergene" : "Aucun"
        }
    ]
})

const panier_3_save = new Panier({
    "id_panier" : 3,
    "id_client" : 3,
    "plats": [
        {
            "id_plat" : 2,
            "nom" : "Poisson deluxe",
            "description" : "poisson de multiple origine",
            "prix" : 15,
            "allergene" : "Aucun"
        },
        {
            "id_plat" : 1,
            "nom" : "kebab",
            "description" : "kebab complet",
            "prix" : 5,
            "allergene" : "Aucun"
        }
    ]
})

const client_1_save = new Client({
    "id_client" : 1,
    "id_panier" : 1,
    "nom" : "Dupont",
    "prenom" : "Joe"
})

const client_2_save = new Client({
    "id_client" : 2,
    "id_panier" : 2,
    "nom" : "Riccart",
    "prenom" : "Didier"
})

const client_3_save = new Client({
    "id_client" : 3,
    "id_panier" : 3,
    "nom" : "Robert",
    "prenom" : "Bernard"
})

const plat_1_save = new Plat({
    "id_plat" : 1,
    "nom" : "kebab",
    "description" : "kebab complet",
    "prix" : 5,
    "allergene" : "Aucun"
})
const plat_2_save = new Plat({
    "id_plat" : 2,
    "nom" : "Poisson deluxe",
    "description" : "poisson de multiple origine",
    "prix" : 15,
    "allergene" : "Aucun"
})
const plat_3_save = new Plat({
    "id_plat" : 3,
    "nom" : "Frite",
    "description" : "Frite",
    "prix" : 3,
    "allergene" : "Aucun"
})
const plat_4_save = new Plat({
    "id_plat" : 4,
    "nom" : "Menu Enfant",
    "description" : "Menu Enfant, contient : Frite, wrap, boisson",
    "prix" : 10,
    "allergene" : "Aucun"
})
const plat_5_save = new Plat({
    "id_plat" : 5,
    "nom" : "Browl Assiatique",
    "description" : "bowl complet assiatique",
    "prix" : 18,
    "allergene" : "Aucun"
})

client_1_save.save()
client_2_save.save()
client_3_save.save()

plat_1_save.save() 
plat_2_save.save()
plat_3_save.save()
plat_4_save.save()
plat_5_save.save()

panier_1_save.save()
panier_2_save.save()
panier_3_save.save()

module.exports = {Plat, Client, Panier}