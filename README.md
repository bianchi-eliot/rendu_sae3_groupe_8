# Application web "Expocar"
```
URL de la documentation swagger : http://localhost:3000/api/v1/api-docs/
```

## Se connecter en tant qu'organisateur et valider des prestataires en attente :
```
Dans la page login, username: charlene@gmail.com  mot de passe: 123456
```

## Se connecter en tant que prestataire et activer des services / réserver des créneaux :
```
Se créer un compte en tant que prestataire puis le valider avec l'organisateur 
ou dans la page login, username: argjentin@gmail.com  mot de passe: 123456
```

## Participer à des services en tant que visiteur :
```
Se créer un compte en tant que visiteur puis cliquer sur la page d'un prestataire ayant un créneau en ce moment dans la map intéractive
ou dans la page login, username: bianchi@gmail.com  mot de passe: 123456  puis cliquer sur la page d'un prestataire ayant un créneau en ce moment dans la map intéractive
```

## Initialiser le dossier ./client
```
$ npm install  puis  $ npm run serve  dans le dossier 
```

## Initialiser le dossier ./server
```
$ npm install  puis  $ npm run start  dans le dossier
```

## Utiliser le module node "pg"
```
Dans le fichier ./server/db_V1.0.js : compléter les informations sur la base de données
```

## Initialiser la base de données
```
Dans une base de données PostgreSQL, utiliser la commande "\i <path>" vers le fichier "script_create_V1.0.sql" et "script_insert_V1.0.sql" dans le dossier ./implementation/jeux_de_donnees
```

## Voir les routes swagger
```
Dans le dossier ./swagger_routes
```

## Voir les détails de l'implémentation (MCD, scripts...)
```
Dans le dossier ./implementation
```

Le projet a été crée pour représenter un évènement : un salon de l'automobile

Les membres du projet sont :
- SAK Asim
- DAVID Florian
- KORBI Argjentin
- MBIZI KOUENDELA Charlène
- BIANCHI Eliot

nom fichier (routes, controllers, services, models) : nom.nom_dossier.js | ex : organiser.controllers.js

nom fichier (autre que routes, controllers, services, models) : snake case | ex : pending_people.json ou list_all_brands.pug

nom variable, nom function : camel case | ex : marqueId

langue : anglais
