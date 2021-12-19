const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import jwt for API's endpoints authentication
const jwt = require('jsonwebtoken');

const {Panier, Plat} = require('./models/panier');
const Client = require('./models/client');
//require("../data_generate/data") // comment this line after you've added the data

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

// Afficher tous les plats
app.get("/dishes", async (req, res) => {
    Plat.find()
        .then(plats => res.status(200).json(plats))
        .catch(() => res.status(404).end())
})

// Afficher un plat par ID
app.get("/dish/:id", async (req, res) => {
    Plat.findOne({id_plat : req.params.id })
        .then((plat) => res.json(plat))
        .catch(() => res.status(404).end())
})

// Mise à jour du panier
/*
app.put("/cart", async (req,res) => {
    Panier.findByIdAndUpdate(req.params.id_panier, req.body)
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})
*/

// ajout d'un article au panier
app.post("/cart/:id", async (req,res) => {
    const panier = await Panier.findOne({id_panier : 1});
    const plat = await Plat.findOne({id_plat : req.params.id}); 
    panier.plats.push(plat);
    Panier.findOneAndUpdate({id_panier : 1}, panier)
        .then(() => res.json(panier))
        .catch(() => res.status(404).end());
})

// Suppression d'un article du panier
app.delete("/cart/:id", async (req,res) => {
    const panier = await Panier.findOne({id_panier : 1});
    const plat = await Plat.findOne({id_plat : req.params.id}); 
    panier.plats.remove(plat);
    Panier.findOneAndUpdate({id_panier : 1}, panier)
        .then(() => res.json(panier))
        .catch(() => res.status(404).end())
})

// Afficher liste article(s) du panier
app.get("/cart", async (req, res) => {
    Panier.find()
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})

// TODO : gérer l'adresse du client (A FAIRE)

// Route par défaut
app.get("*", (req, res) => {
    res.status(404).end()
    //console.log("error 404")
})

app.listen(8000);