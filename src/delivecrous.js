const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { Plat, Panier, Client } = require("../data_generate/data");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

// afficher tous les plats
app.get("/plats", async (req, res) => {
    Plat.find()
        .then((plats) => res.json(plats))
        .catch(() => res.status(404).end())
})

// afficher un plat par ID
app.get("/plats/:id", async (req, res) => {
    Plat.findById(req.params.id)
        .then((plat) => res.json(plat))
        .catch(() => res.status(404).end())
})

// mise à jour du panier
app.put("/cart", async (req,res) => {
    Panier.findByIdAndUpdate(req.params.id, req.body)
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})

// suppression du panier
app.delete("/cart/:id", async (req,res) => {
    Panier.findByIdAndDelete(req.params.id)
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})

// route par défaut
app.get("*", (req, res) => {
    res.status(404).end()
    console.log("error 404")
})

app.listen(8000);