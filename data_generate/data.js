const {Panier, Plat} = require('../src/models/panier');
const Client = require('../src/models/client');

/*
const client_1_save = new Client({
    "_id" : 1,
    "id_panier" : 1,
    "nom" : "Dupont",
    "prenom" : "Joe"
})
*/

/*
const client_2_save = new Client({
    "_id" : 2,
    "id_client" : 2,
    "id_panier" : 2,
    "nom" : "Riccart",
    "prenom" : "Didier"
})

const client_3_save = new Client({
    "_id" : 3,
    "id_client" : 3,
    "id_panier" : 3,
    "nom" : "Robert",
    "prenom" : "Bernard"
})
*/

const plat1_save = 
    new Plat({
        "id_plat" : 1,
        "nom" : "kebab",
        "description" : "kebab complet",
        "prix" : 5,
        "allergene" : "Aucun"});
const plat2_save = 
    new Plat({
        "id_plat" : 2,
        "nom" : "Poisson deluxe",
        "description" : "poisson de multiple origine",
        "prix" : 15,
        "allergene" : "Aucun"
    });
const plat3_save =
    new Plat({
        "id_plat" : 3,
        "nom" : "Frite",
        "description" : "Frites",
        "prix" : 3,
        "allergene" : "Aucun"
    });
const plat4_save =
    new Plat({
        "id_plat" : 4,
        "nom" : "Menu Enfant",
        "description" : "Menu Enfant, contient : Frites, wrap, boisson",
        "prix" : 10,
        "allergene" : "Aucun"
    });
const plat5_save =
    new Plat({
        "id_plat" : 5,
        "nom" : "Browl Asiatique",
        "description" : "bowl complet asiatique",
        "prix" : 18,
        "allergene" : "Aucun"
    });

/*
const panier_save = new Panier({
    //"id_panier" : 100,
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
})
*/

/*
const panier_2_save = new Panier({
    "_id" : 2,
    "id_panier" : 2,
    "id_client" : 2,
    "plats": [
        {
            "_id" : 5,
            "id_plat" : 5,
            "nom" : "Browl Assiatique",
            "description" : "bowl complet assiatique",
            "prix" : 18,
            "allergene" : "Aucun"
        }, 
        {
            "_id" : 2,
            "id_plat" : 2,
            "nom" : "Poisson deluxe",
            "description" : "poisson de multiple origine",
            "prix" : 15,
            "allergene" : "Aucun"
        }
    ]
})

const panier_3_save = new Panier({
    "_id" : 3,
    "id_panier" : 3,
    "id_client" : 3,
    "plats": [
        {
            "_id" : 2,
            "id_plat" : 2,
            "nom" : "Poisson deluxe",
            "description" : "poisson de multiple origine",
            "prix" : 15,
            "allergene" : "Aucun"
        },
        {
            "_id" : 1,
            "id_plat" : 1,
            "nom" : "kebab",
            "description" : "kebab complet",
            "prix" : 5,
            "allergene" : "Aucun"
        }
    ]
})
*/

//client_1_save.save()
/*
client_2_save.save()
client_3_save.save()
*/

plat1_save.save() 
plat2_save.save() 
plat3_save.save() 
plat4_save.save() 
plat5_save.save() 

//panier_save.save()
/*
panier_2_save.save()
panier_3_save.save()
*/
