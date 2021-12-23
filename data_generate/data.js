const {Plat, Panier} = require('../src/models/panier');
const Client = require('../src/models/client');

// connection to DB
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/delivecrous");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let clients = [
    {
    "_id" : 1,
    "username" : "joe_dupont",
    "nom" : "Dupont",
    "prenom" : "Joe",
    },
    {
    "_id" : 2,
    "username" : "didier_riccart",
    "nom" : "Riccart",
    "prenom" : "Didier",
    },
    {
    "_id" : 3,
    "username" : "bernard_robert",
    "nom" : "Robert",
    "prenom" : "Bernard",
    }
];

let plats = [
    {
        "id_plat" : 1,
        "nom" : "kebab",
        "description" : "kebab complet",
        "prix" : 5,
        "allergene" : "Aucun"
    },
    {
        "id_plat" : 2,
        "nom" : "Poisson deluxe",
        "description" : "poisson de multiple origine",
        "prix" : 15,
        "allergene" : "Aucun"
    },
    {
        "id_plat" : 3,
        "nom" : "Frite",
        "description" : "Frites",
        "prix" : 3,
        "allergene" : "Aucun"
    },
    {
        "id_plat" : 4,
        "nom" : "Menu Enfant",
        "description" : "Menu Enfant, contient : Frites, wrap, boisson",
        "prix" : 10,
        "allergene" : "Aucun"
    },
    {
        "id_plat" : 5,
        "nom" : "Browl Asiatique",
        "description" : "bowl complet asiatique",
        "prix" : 18,
        "allergene" : "Aucun"
    }
]

const panier = new Panier({
    "id_panier" : 1,
    "plats": [],
    "rue": "",
    "ville": "",
    "code_postal": ""
    });

async function saveElements() {
    plats.forEach(plat => {
        let pl = new Plat(plat);
        pl.save();
    });

    clients.forEach(client => {
        let cl = new Client(client);
        cl.save();
    });

    panier.save()
}

db.once('open', function() {
    // we're connected!
    console.log("connected")
    saveElements()
});
