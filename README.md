# FISA_3_Delivecrous_AUZOU

## Installation
Installer les paquets de dépendance :
```
npm install -g express
npm install -g body-parser
npm install -g mongoose
npm install -g jsonwebtoken
```

## Routes API
`/dishes` [GET] 
    - affichage de tous les plats
`/dish/:id` [GET]
    - affichage d'un plat par id
`/cart/:id` [POST]
    - ajout d'un article au panier
`/cart/:id` [DELETE]
    - suppresion d'un article du panier
`/cart` [GET]
    - affichage liste article(s) du panier
`/cart_validation` [PUT]
    - Gérer l'adresse du client et valider commande
    - Exemple :
```
{
    "rue" : "test",
    "code_postal": "autre",
    "ville": "Valenciennnes"
}
```
`/*` [GET]
    - Route par défaut


## BD
*    à compléter

## Documentation
* Pour l'initialisation du projet (peuplage de la BDD), lancer la commande suivante : `node data_generate/data`
* visualiser sur MongoDBCompass ou MongoSH si c'est bien peuplé, puis tuer ce processus.
* Lancer le projet principal avec la commande : `node src/delivecrous`.
* Enfin, rendez vous sur le site localhost:8000/[API_ROUTE], en remplaçant [API_ROUTE] par l'un des chemins spécifiés au dessus (pour les requêtes GET)
* Pour les autres, utilisez directement Postman, avec le fichier de requêtes fourni

## Postman
* à compléter (éventuellement mettre le lien vers le fichier JSON finalisé qui sera sur le repo)