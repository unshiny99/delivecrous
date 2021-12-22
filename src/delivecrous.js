const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const Client = require('./models/client');
const {Panier, Plat} = require('./models/panier');
const { callbackify } = require("util");

const res = require("express/lib/response");
const { nextTick } = require("process");

TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex');

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

// Génération du token
function generateAccessToken(username) {
    return jwt.sign(
        username, 
        TOKEN_SECRET, 
        { expiresIn: '60s'}
    );
}

// Vérification de la validité du token
function verifyToken(req, res, next){
    return jwt.verify(req.headers['authorization'],
                        TOKEN_SECRET, (err, decoded) => { 
        if(err){
            res.send(JSON.stringify({
                error : err
            }))
        }else{
            next()
        }
     });
}

// Fonction de test : Verify token (DEBUG)
app.post("/test", async (req, res) => {
    res.json(verifyToken(req));
})

// Login et génération du token
app.post("/login", async (req, res) => {
    // vérification si le client existe puis génération token
    Client.findOne({username : req.body.username}, function(err, client) {
        if(err) throw res.status(404).end();
        if(client) {
            const token = generateAccessToken({username: req.body.username});
            res.json(token);
        } else {
            res.send(JSON.stringify({
                error : "le client n'existe pas dans la data base"
            }))
        }
    });
})

// Afficher tous les plats
app.get("/dishes", verifyToken, async (req, res) => {
    Plat.find()
        .then(plats => res.status(200).json(plats))
        .catch(() => res.status(404).end())
})

// Afficher un plat par ID
app.get("/dish/:id", verifyToken, async (req, res) => {
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

// afficher un plat par son nom (fixture challenge)
app.get("/dish/:nom", verifyToken, async (req, res) => {
    Plat.findOne({nom : req.params.nom },
        function(err, plat){
            if (err) throw res.status(404).end();
            if (plat) {
                // res.status(200).json(plat);
            } else {
                res.send(JSON.stringify({
                    error : "le plat n'existe pas dans la data base"
                }))
            }
        }
    )
})

// ajout d'un article au panier
app.post("/cart/:id", verifyToken, async (req,res) => {
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
app.delete("/cart/:id", verifyToken, async (req,res) => {
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
app.get("/cart", verifyToken, async (req, res) => {
    Panier.find()
        .then((panier) => res.status(200).json(panier))
        .catch(() => res.status(404).end())
})

// Gérer l'adresse du client
app.put("/cart_validation", verifyToken, async (req, res) => {
    Panier.findOne({id_panier : 1}, 
        function(err, panier){
            if(err) throw res.status(404).end();
            if(panier && req.body.rue != "" && req.body.code_postal != "" && req.body.ville != "") {
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

// Route par défaut
app.get("*", verifyToken, (req, res) => {
    res.status(404).end()
})

app.listen(8000);