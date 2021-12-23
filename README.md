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
*       affichage de tous les plats
`/dish/:id` [GET]
*       affichage d'un plat par id
`/cart/:id` [POST]
*       ajout d'un article au panier
`/cart/:id` [DELETE]
*       suppresion d'un article du panier
`/cart` [GET]
*       affichage liste article(s) du panier
`/cart_validation` [PUT]
*       Gérer l'adresse du client et valider commande
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
*    adresse de la base de donnée par défaut :
    
```
    mongodb://localhost:27017/delivecrous
```     

## Documentation
* Pour l'initialisation du projet (peuplage de la BDD), lancer la commande suivante : `node data_generate/data`
* visualiser sur MongoDBCompass ou MongoSH si c'est bien peuplé, puis tuer ce processus.
* Lancer le projet principal avec la commande : `node src/delivecrous`.
* Enfin, rendez vous sur le site localhost:8000/[API_ROUTE], en remplaçant [API_ROUTE] par l'un des chemins spécifiés au dessus (pour les requêtes GET)
* Pour les autres, utilisez directement Postman, avec le fichier de requêtes fourni

## Postman
* `Lien vers le fichier postman`
```
./postman/Insa-delivecrous_auzou_frémeaux.postman_collection.json
```

* init variable sur postman

![init_variable_env_postman](src/images/init_variable_env_postman.PNG)

* login sur postman
```
set la variable d'environnement `token` avec le token renvoyer lors du login
```
![login sur postman](src/images/login_postman.PNG)