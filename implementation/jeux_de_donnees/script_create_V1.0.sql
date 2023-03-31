drop table if exists stars, active, creneaux, contient, rempli_panier, livre_dor, affluence_sur_page, notes, commandes, commentaires, pieces, personnes, services, roles, stands, societes, type_pieces, activites;

CREATE TABLE activites(
   id_activite SERIAL,
   nom_activite VARCHAR(255),
   PRIMARY KEY(id_activite)
);

CREATE TABLE type_pieces(
   id_type_piece SERIAL,
   nom_type_piece VARCHAR(255),
   PRIMARY KEY(id_type_piece)
);

CREATE TABLE societes(
   id_societe SERIAL,
   nom_societe VARCHAR(255),
   photo_marque VARCHAR(255),
   PRIMARY KEY(id_societe)
);

CREATE TABLE stands(
   id_stand SERIAL,
   numero_stand INT,
   nb_place VARCHAR(255),
   PRIMARY KEY(id_stand)
);

CREATE TABLE roles(
   id_role SERIAL,
   libelle_role VARCHAR(255),
   PRIMARY KEY(id_role)
);

CREATE TABLE services(
   id_service SERIAL,
   libelle_service VARCHAR(255),
   PRIMARY KEY(id_service)
);


CREATE TABLE personnes(
   id_personne SERIAL,
   nom VARCHAR(255),
   prenom VARCHAR(255),
   email VARCHAR(255),
   infoPersonne TEXT,
   mot_de_passe VARCHAR(999),
   id_activite INT,
   id_role INT NOT NULL,
   id_societe INT,
   PRIMARY KEY(id_personne),
   FOREIGN KEY(id_activite) REFERENCES activites(id_activite),
   FOREIGN KEY(id_role) REFERENCES roles(id_role),
   FOREIGN KEY(id_societe) REFERENCES societes(id_societe)
);

CREATE TABLE pieces(
   id_piece SERIAL,
   descriptif_piece TEXT,
   nom_piece VARCHAR(255),
   prix_piece VARCHAR(255),
   image_piece VARCHAR(255),
   quantite_piece VARCHAR(255),
   id_type_piece INT NOT NULL,
   id_societe INT NOT NULL,
   PRIMARY KEY(id_piece),
   FOREIGN KEY(id_type_piece) REFERENCES type_pieces(id_type_piece),
   FOREIGN KEY(id_societe) REFERENCES societes(id_societe)
);

CREATE TABLE commentaires(
   id_commentaire SERIAL,
   libelle_commentaire VARCHAR(255),
   id_piece INT NOT NULL,
   PRIMARY KEY(id_commentaire),
   FOREIGN KEY(id_piece) REFERENCES pieces(id_piece)
);

CREATE TABLE commandes(
   id_commande SERIAL,
   adresse_commande VARCHAR(255),
   date_commande DATE,
   email_commande VARCHAR(255),
   id_personne INT NOT NULL,
   PRIMARY KEY(id_commande),
   FOREIGN KEY(id_personne) REFERENCES personnes(id_personne)
);

CREATE TABLE notes(
   id_note SERIAL,
   valeur_note VARCHAR(255),
   id_piece INT NOT NULL,
   PRIMARY KEY(id_note),
   FOREIGN KEY(id_piece) REFERENCES pieces(id_piece)
);

CREATE TABLE affluence_sur_page(
   tranche_horaire VARCHAR(255),
   compteur INT,
   id_personne INT NOT NULL,
   PRIMARY KEY(id_personne, tranche_horaire),
   FOREIGN KEY(id_personne) REFERENCES personnes(id_personne)
);

CREATE TABLE livre_dor(
   id_prestataire INT,
   id_visiteur INT,
   date_signature VARCHAR(255),
   message_visiteur VARCHAR(255),
   PRIMARY KEY(id_prestataire, id_visiteur),
   FOREIGN KEY(id_prestataire) REFERENCES personnes(id_personne),
   FOREIGN KEY(id_visiteur) REFERENCES personnes(id_personne)
);


CREATE TABLE rempli_panier(
   id_personne INT,
   id_piece INT,
   quantite INT,
   PRIMARY KEY(id_personne, id_piece),
   FOREIGN KEY(id_personne) REFERENCES personnes(id_personne),
   FOREIGN KEY(id_piece) REFERENCES pieces(id_piece)
);

CREATE TABLE contient(
   id_piece INT,
   id_commande INT,
   PRIMARY KEY(id_piece, id_commande),
   FOREIGN KEY(id_piece) REFERENCES pieces(id_piece),
   FOREIGN KEY(id_commande) REFERENCES commandes(id_commande)
);

CREATE TABLE creneaux(
   id_personne INT,
   id_stand INT,
   creneau TIMESTAMP,
   PRIMARY KEY(id_personne, id_stand, creneau),
   FOREIGN KEY(id_personne) REFERENCES personnes(id_personne),
   FOREIGN KEY(id_stand) REFERENCES stands(id_stand)

);

CREATE TABLE active(
   id_personne INT,
   id_service INT,
   PRIMARY KEY(id_personne, id_service),
   FOREIGN KEY(id_personne) REFERENCES personnes(id_personne),
   FOREIGN KEY(id_service) REFERENCES services(id_service)
);

CREATE TABLE stars(
   id_prestataire INT,
   id_visiteur INT,
   valeur_note INT not null,
   PRIMARY KEY(id_prestataire, id_visiteur),
   FOREIGN KEY(id_prestataire) REFERENCES personnes(id_personne),
   FOREIGN KEY(id_visiteur) REFERENCES personnes(id_personne)
);