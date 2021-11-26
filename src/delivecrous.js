const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { Plat, Panier, Client } = require("../data_generate/data");


const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

// Afficher tous les plats
// semble renvoyer plusieurs fois le même plat
app.get("/dishes", async (req,res) => {
    Plat.find()
        .then((plats) => res.json(plats))
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
    Panier.findOne({id_panier : req.params.id})
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})

// Suppression d'un article du panier
app.delete("/cart/:id", async (req,res) => {
    Panier.findOne({id_panier : req.params.id})
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})

// Afficher liste article(s) du panier
app.get("/cart/:id", async (req, res) => {
    Panier.findOne({id_panier : req.params.id})
        .then((panier) => res.json(panier["plats"]))
        .catch(() => res.status(404).end())
})



// Route par défaut
app.get("*", (req, res) => {
    res.status(404).end()
    console.log("error 404")
})

app.listen(8000);