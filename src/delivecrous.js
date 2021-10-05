const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Plat } = require("../data_generate/data");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

// afficher tous les plats
app.get("/dishes", async (req,res) => {
    Plat.find()
        .then((plats) => res.json(plats))
        .catch(() => res.status(404).end())
})

// afficher un plat par ID
app.get("/dishes/:id", async (req,res) => {
    Plat.findById(req.params.id)
        .then((plat) => res.json(plat))
        .catch(() => res.status(404).end())
})

app.put("/cart", async (req,res) => {
    Panier.findByIdAndUpdate(req.params.id, req.body)
        .then((panier) => res.json(panier))
        .catch(() => res.status(404).end())
})

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