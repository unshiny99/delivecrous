const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

const Plat = mongoose.model("Plat", {
    id_plat : Number,
    nom : String,
    description : String,
    prix : Number,
    allergene : String
})

const Panier = mongoose.model("Panier", {
    id_panier : Number,
    id_plat : Number,
    id_client : Number
})

const Client = mongoose.model("Client", {
    id_client : Number,
    id_panier : Number,
    nom : String,
    prenom : String
})

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

// route par défaut
app.get("*", (req, res) => {
    res.status(404).end()
    console.log("error 404")
})

app.listen(8000);