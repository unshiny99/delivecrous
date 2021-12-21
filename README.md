# FISA_3_Delivecrous_AUZOU

## Installation
```
npm install -g express
npm install -g body-parser
npm install -g mongoose
npm install -g jsonwebtoken
```

## Routes
* /dishes [GET] 
    - affichage de tous les plats
* /dish/:id [GET]
    - affichage d'un plat par id
* /cart/:id [POST]
    - ajout d'un article au panier
* /cart/:id [DELETE]
    - suppresion d'un articles du panier
* /cart [GET]
    - affichages liste article(s) du panier
* /cart [PUT]
    - Gerer l'adresse du client
    - Exemple :
```
{
    "rue" : "test",
    "code_postal": "autre",
    "ville": "Valenciennnes"
}
```
* /* [GET]
    - Route par défaut


## BD
*    à compléter

## Documentation
*    à compléter

## Postman
*    à compléter