const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import jwt for API's endpoints authentication
const jwt = require('jsonwebtoken');

const {Panier, Plat} = require('./models/panier');
const Client = require('./models/client');

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
    Plat.findOne({id_plat : req.params.id },
        function(err, plat){
            if (err) throw res.status(404).end();
            if (plat) {
                res.status(200).json(plat);
            } else {
                res.send(JSON.stringify({
                    error : "le plat n'existe pas dans la data base"
                }))
            }
        }
    )
})

// ajout d'un article au panier
app.post("/cart/:id", async (req,res) => {
    const panier = await Panier.findOne({id_panier : 1});
    Plat.findOne({id_plat : req.params.id}, 
        function(err, plat){
            if(err) throw res.status(404).end();
            if(plat) {
                panier.plats.push(plat);
                Panier.findOneAndUpdate({id_panier : 1}, panier)
                .then(() => res.json(panier))
                .catch(() => res.status(404).end());
            } else{
                res.send(JSON.stringify({
                    error : "le plat n'existe pas dans la data base"
                }))
            }
        }
    ); 
})

// Suppression d'un article du panier
app.delete("/cart/:id", async (req,res) => {
    const panier = await Panier.findOne({id_panier : 1});
    Plat.findOne({id_plat : req.params.id}, 
        function(err, plat){
            if(err) throw res.status(404).end();
            if(plat) {
                panier.plats.remove(plat);
                Panier.findOneAndUpdate({id_panier : 1}, panier)
                .then(() => res.json(panier))
                .catch(() => res.status(404).end())
            } else{
                res.send(JSON.stringify({
                    error : "le plat n'existe pas dans la data base"
                }))
            }
        }); 
})

// Afficher liste article(s) du panier
app.get("/cart", async (req, res) => {
    Panier.find()
        .then((panier) => res.status(200).json(panier))
        .catch(() => res.status(404).end())
})

// Gérer l'adresse du client
app.put("/cart_validation", async (req, res) => {
    Panier.findOne({id_panier : 1}, 
        function(err, panier){
            if(err) throw res.status(404).end();
            if(panier && req.body.rue != "" && req.body.code_postal != "" && req.body.ville) {
                Panier.updateOne(panier, {
                "rue": req.body.rue,
                "code_postal": req.body.code_postal,
                "ville": req.body.ville
                })
                .then(() => res.json({"message" : "commande prise en compte avec succès"}))
                .catch(() => res.status(404).end())
            } else {
                res.send(JSON.stringify({
                    error : "Veillez à bien renseigner toutes les informations avant de valider votre commande."
                }))
            }
        }
    );
})


app.get

// Route par défaut
app.get("*", (req, res) => {
    res.status(404).end()
})

app.listen(8000);