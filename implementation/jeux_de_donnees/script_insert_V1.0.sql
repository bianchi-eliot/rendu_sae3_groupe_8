INSERT INTO activites VALUES
    (default,'conférence'), -- 1
    (default,'tuning'), -- 2
    (default,'course de voiture'), -- 3
    (default,'autographe des pilotes'); -- 4

INSERT INTO type_pieces VALUES
    (default,'Pièces moteur'),
    (default,'Freinage'),
    (default,'Visibilité'),
    (default,'Démarrage et charge'),
    (default,'Echappement'),
    (default,'Accessoires et Equipements'),
    (default,'Pneus et Equipements Roue'),
    (default,'Carroserie et peinture');

INSERT INTO societes VALUES
    (default,'Renault','renault_logo.svg'),
    (default,'Peugeot','peugeot_logo.svg'),
    (default,'Citroen','citroen_logo.svg'),
    (default,'Fiat','fiat_logo.svg'),
    (default,'Ford','ford_logo.svg'),
    (default,'Mercedes','mercedes_logo.svg'),
    (default,'BMW','bmw_logo.svg'),
    (default,'Audi','audi_logo.svg'),
    (default,'Volkswagen','volkswagen_logo.svg'),
    (default,'Toyota','toyota_logo.svg');


INSERT INTO stands VALUES
    (default,1,200),
    (default,2,200),
    (default,3,200),
    (default,4,400),
    (default,5,400),
    (default,6,400),
    (default,7,800),
    (default,8,800),
    (default,9,1000),
    (default,10,1000),
    (default,11,1000);

INSERT INTO roles VALUES
    (default,'organisateur'), --1
    (default,'prestataire'), --2
    (default,'restaurateur'), --3
    (default,'client'), --4
    (default, 'prestataire_en_attente'); --5

INSERT INTO services VALUES
    (default,'Guests'' book'),
    (default,'Stars'),
    (default,'E-shop'),
    (default,'Affluent graph');

INSERT INTO personnes VALUES
    (default,'Mbizi ','Charlene','charlene@gmail.com',null,'123456',null,1,null), -- organisateur
    
    (default,'Korbi','Marie','argjentin@gmail.com','"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"','123456',1,2,1),
    (default,'Reyna','Samuel','samuel@gmail.com','"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."','123456',2,2,2),
    (default,'Shotwell','Marcos','marcos@gmail.com', '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"','123456',3,2,3),
    (default,'Bedell','Heather','heather@gmail.com', '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"','123456',1,2,4),
    (default,'Chestnut','Sandra','sandra@gmail.com', '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"','123456',4,2,5),
    (default,'Ford','Angela','angela@gmail.com', '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."','123456',4,2,6),
    (default,'Dupont','Jean','jeans@gmail.com','"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."','123456',2,2,7),
    (default,'Vaillon','Thomas','dupontd@gmail.com','"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."','123456',2,2,8),
    (default,'Korbi','Marie','marie@gmail.com','"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"','123456',2,2,9),
    (default,'Liuzzo','Pierre','pierre@gmail.com', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."','123456',2,2,10),
    (default,'Korbi','Argjentin','korbi@gmail.com','"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"','123456',1,5,1),
    (default,'Fruit','Samuel','fruit@gmail.com','"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."','123456',2,5,2),
    (default,'Tavernier','Julie','tavernier@gmail.com', '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"','123456',3,5,3),
    (default,'Baudel','Laurent','baudel@gmail.com', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."','123456',1,5,4),
    (default,'Chess','Sophie','chess@gmail.com', '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"','123456',4,5,5),
    (default,'Aba','Angela','aba@gmail.com', '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."','123456',4,5,6),

    (default,'Overbek','Bill','billoverbek@gmail.com',null,'123456',null,4,null),
    (default,'Myers','Michael','michaelmyers@gmail.com',null,'123456',null,4,null),
    (default,'Chirac','Jacques','jacqueschirac@gmail.com',null,'mangezdespommes',null,4,null),
    (default,'Burton','Tim','timburton@gmail.com',null,'123456',null,4,null),
    (default,'Bianchi','Eliot','bianchi@gmail.com',null,'123456',null,4,null);

    
INSERT INTO pieces VALUES
    (default,'Caractéristiques techniques : Hauteur de l’emballage : 3 cm Largeur de l’emballage : 16 cm Largeur : 20 mm Longueur de l’emballage : 25.5 cm Nombre de dents : 131 Périphériques entraînés : Arbre à came','Courroie de distribution - Continental ct1230',50.23,'cont_ct1230.png',18,1,2),
    (default,'Caractéristiques techniques : Filetage extérieur : M8 x 1 mm Longueur : 118 mm Voltage : 11 V','Bougie de préchauffage - NPS M571A13',8.10,'nps_m571a13.png',18,1,3),
    (default,'Caractéristiques techniques : Couple de serrage de : 6 Nm Couple de serrage jusqu''à : 10 Nm Filetage : M 8 x 1,0 Longueur : 114 mm Montée conique : 123 Ouverture de la clé : 8 Profondeur de position : 28 mm Type de raccord : PINVersion de bougie de préchauffage : Bougie de préchauffage monopolaire Version de bougie de préchauffage : capable à l''incandescence résiduelle Voltage : 5 V','Bougie de préchauffage - BOSCH 0250404001',13.52,'bosch_0250404001.png',44,1,2),
    (default,'Caractéristiques techniques : Référence(s) commerciale(s) : 6 PK 974, 6 PK 975, 6 PK 977, 6 PK 978 Longueur : 976 mm Nombre de stries : 6','Courroie trapézoïdale à nervures (d''accessoires) - CONTITECH 6PK976',10.38,'cont_6pk976.png',88,1,2),
    (default,'Caractéristiques techniques : Diamètre extérieur : 60 mm Diamètre : 60 mm Largeur : 30 mm','Galet enrouleur de courroie de distribution - NPS S113I11B',17.11,'nps_s113i11b.png',52,1,1),
    (default,'Fourni avec :  - Ressorts de soupapes - Soupapes/valves - Kit de vis','Culasse de cylindre - AMC 908833K',1372.85,'amc_908833k.png',7,1,5),
    (default,'Type : Cartouche papier Diamètre intérieur : 26 mm Largeur : 62 mm Hauteur : 83 mm Spécification : Inclus 2 joints','Filtre à huile - NPS M131A27',6.90,'npm_m131A27.png',17,1,1);

INSERT INTO commentaires VALUES
    (default,'Article nul',1),
    (default,' A revoir',1),
    (default,' A revoir',1),
    (default,' Super article',1),
    (default,' Pas de bonne qualité',1),
    (default,' Je suis déçue',1),
    (default,'Je retourne l''article',1),
    (default,' Assez bien',1),
    (default,'Bien',1),
    (default,' L''article est parfait',1);

insert into commandes VALUES
    (default,'11 Rue des Francs Bourgeois 75004 Paris','2022-10-4', 'billoverbek@gmail.com',18),
    (default,'113 Quai Adolphe Poult 82000 Montauban','2022-01-17', 'michaelmyers@gmail.com',19),
    (default,'2 Rue des Bouleaux 44600 Saint-Nazaire','2022-10-4', 'jacqueschirac@gmail.com',20),
    (default,'8 Rue Burnol 03200 Allier','2022-03-14', 'timburton@gmail.com',21);


INSERT INTO notes VALUES
    (default,1,1),
    (default,2,1),
    (default,2,1),
    (default,4,1),
    (default,2,1),
    (default,2,1),
    (default,2,1),
    (default,3,1),
    (default,4,1),
    (default,5,1);


-- affluence 
insert into affluence_sur_page VALUES
    -- prestataire 2
    ('8', 55, 2),
    ('10', 34, 2),
    ('12', 20, 2),
    ('14', 200, 2),
    ('16', 120, 2),
    ('18', 103, 2),
    ('19', 10, 2),
    -- prestataire 3
    ('12', 100, 3),
    ('14', 20, 3),
    ('20', 23, 3),
    -- prestataire 4
    ('8', 12, 4),
    ('10', 34, 4),
    ('12', 20, 4),
    ('14', 9, 4),
    ('16', 120, 4),
    ('18', 13, 4),
    ('19', 13, 4),
    -- prestataire 5
    ('8', 12, 5),
    ('10', 34, 5),
    ('16', 120, 5),
    ('18', 13, 5),
    ('19', 13, 5),
    -- prestataire 6
    ('8', 12, 6),
    ('14', 2, 6),
    ('16', 120, 6),
    ('18', 130, 6),
    ('19', 27, 6),
    ('20', 93, 6);

insert into livre_dor VALUES
    (2, 18, '2023-03-31','Well done!'),
    (2, 19, '2023-01-10','This convention was a success!'),
    (2, 20, '2023-01-10','Congratulation for your convention: one that will be remember in history'),
    (2, 21, '2023-01-11','That was not bad'),

    (3, 18, '2023-03-31','Well done!'),
    (3, 21, '2023-01-11','That was not bad'),

    (4, 20, '2023-01-10','Congratulation for your convention: one that will be remember in history'),
    (4, 21, '2023-01-11','That was not bad');

-- rempli_panier


INSERT INTO contient VALUES
    (1,1),
    (1,2),
    (1,3),
    (1,4);

INSERT INTO creneaux VALUES
  -- jour 1
    -- pres2
    (2,7,'2023-03-31 14:00:00'),
    (2,6,'2023-03-31 10:00:00'),
    -- pres3
    (3,7,'2023-03-31 16:00:00'),
    (3,8,'2023-03-31 18:00:00'),
    -- pres4
    (4,3,'2023-03-31 10:00:00'),
    (4,1,'2023-03-31 12:00:00'),
    -- pres5
    (5,1,'2023-03-31 16:00:00'),
    (5,7,'2023-03-31 18:00:00'),
    -- pres6
    (6,10,'2023-03-31 12:00:00'),
    (6,8,'2023-03-31 14:00:00'),
    -- pres7
    (7,3,'2023-03-31 16:00:00'),
    (7,6,'2023-03-31 14:00:00'),
    -- pres8
    (8,8,'2023-03-31 10:00:00'),
    (8,9,'2023-03-31 18:00:00'),
    -- pres9
    (9,5,'2023-03-31 14:00:00'),
    (9,8,'2023-03-31 14:00:00'),
    -- pres10
    (10,9,'2023-03-31 12:00:00'),
    (10,2,'2023-03-31 12:00:00'),
    -- pres11
    (11,8,'2023-03-31 12:00:00'),
    (11,1,'2023-03-31 08:00:00'),
   -- jour 2
    -- pres2
    (2,7,'2023-01-10 14:00:00'),
    (2,6,'2023-01-10 10:00:00'),
    -- pres3
    (3,7,'2023-01-10 16:00:00'),
    (3,8,'2023-01-10 18:00:00'),
    -- pres4
    (4,3,'2023-01-10 10:00:00'),
    (4,1,'2023-01-10 12:00:00'),
    -- pres5
    (5,1,'2023-01-10 16:00:00'),
    (5,7,'2023-01-10 18:00:00'),
    -- pres6
    (6,10,'2023-01-10 12:00:00'),
    (6,8,'2023-01-10 14:00:00'),
    -- pres7
    (7,3,'2023-01-10 16:00:00'),
    (7,6,'2023-01-10 14:00:00'),
    -- pres8
    (8,8,'2023-01-10 10:00:00'),
    (8,9,'2023-01-10 18:00:00'),
    -- pres9
    (9,5,'2023-01-10 14:00:00'),
    (9,8,'2023-01-10 14:00:00'),
    -- pres10
    (10,9,'2023-01-10 12:00:00'),
    (10,2,'2023-01-10 12:00:00'),
    -- pres11
    (11,8,'2023-01-10 12:00:00'),
    (11,1,'2023-01-10 08:00:00'),
    -- jour 3
    -- pres2
    (2,10,'2023-01-11 14:00:00'),
    (2,8,'2023-01-11 10:00:00'),
    -- pres3
    (3,7,'2023-01-11 16:00:00'),
    (3,8,'2023-01-11 18:00:00'),
    -- pres4
    (4,3,'2023-01-11 10:00:00'),
    (4,6,'2023-01-11 12:00:00'),
    -- pres5
    (5,10,'2023-01-11 16:00:00'),
    (5,5,'2023-01-11 18:00:00'),
    -- pres6
    (6,4,'2023-01-11 12:00:00'),
    (6,2,'2023-01-11 14:00:00'),
    -- pres7
    (7,2,'2023-01-11 10:00:00'),
    (7,6,'2023-01-11 14:00:00'),
    -- pres8
    (8,7,'2023-01-11 10:00:00'),
    (8,9,'2023-01-11 18:00:00'),
    -- pres9
    (9,3,'2023-01-11 14:00:00'),
    (9,7,'2023-01-11 14:00:00'),
    -- pres10
    (10,3,'2023-01-11 16:00:00'),
    -- pres11
    (11,8,'2023-01-11 10:00:00'),
    (11,1,'2023-01-11 18:00:00'),
    -- jour 4
    -- pres2
    (2,1,'2023-01-12 08:00:00'),
    (2,2,'2023-01-12 10:00:00'),
    -- pres3
    (3,2,'2023-01-12 16:00:00'),
    (3,3,'2023-01-12 18:00:00'),
    -- pres4
    (4,9,'2023-01-12 10:00:00'),
    (4,8,'2023-01-12 12:00:00'),
    -- pres5
    (5,2,'2023-01-12 16:00:00'),
    (5,5,'2023-01-12 18:00:00'),
    -- pres6
    (6,10,'2023-01-12 10:00:00'),
    (6,7,'2023-01-12 14:00:00'),
    -- pres7
    (7,2,'2023-01-12 14:00:00'),
    (7,3,'2023-01-12 16:00:00'),
    -- pres8
    (8,5,'2023-01-12 10:00:00'),
    (8,10,'2023-01-12 18:00:00'),
    -- pres9
    (9,10,'2023-01-12 10:00:00'),
    (9,7,'2023-01-12 14:00:00'),
    -- pres10
    (10,7,'2023-01-12 08:00:00'),
    (10,9,'2023-01-12 14:00:00'),
    -- pres11
    (11,1,'2023-01-12 10:00:00'),
    (11,1,'2023-01-12 18:00:00'),

    -- -- jour 5
    -- pres2
    (2,10,'2023-01-13 08:00:00'),
    (2,3,'2023-01-13 10:00:00'),
    -- pres3
    (3,7,'2023-01-13 16:00:00'),
    (3,3,'2023-01-13 18:00:00'),
    -- pres4
    (4,9,'2023-01-13 10:00:00'),
    (4,2,'2023-01-13 12:00:00'),
    -- pres5
    (5,2,'2023-01-13 16:00:00'),
    (5,6,'2023-01-13 18:00:00'),
    -- pres6
    (6,10,'2023-01-13 10:00:00'),
    (6,2,'2023-01-13 14:00:00'),
    -- pres7
    (7,8,'2023-01-13 14:00:00'),
    (7,3,'2023-01-13 14:00:00'),
    -- pres8
    (8,2,'2023-01-13 10:00:00'),
    (8,5,'2023-01-13 18:00:00'),
    -- pres9
    (9,8,'2023-01-13 10:00:00'),
    (9,7,'2023-01-13 14:00:00'),
    -- pres10
    (10,7,'2023-01-13 08:00:00'),
    (10,9,'2023-01-13 14:00:00'),
    -- pres11
    (11,5,'2023-01-13 10:00:00'),
    (11,6,'2023-01-13 18:00:00'),

    -- -- jour 6

        -- pres2
    (2,1,'2023-01-14 08:00:00'),
    (2,2,'2023-01-14 10:00:00'),
    -- pres3
    (3,2,'2023-01-14 16:00:00'),
    (3,3,'2023-01-14 18:00:00'),
    -- pres4
    (4,9,'2023-01-14 10:00:00'),
    (4,8,'2023-01-14 12:00:00'),
    -- pres5
    (5,2,'2023-01-14 16:00:00'),
    (5,8,'2023-01-14 18:00:00'),
    -- pres6
    (6,10,'2023-01-14 10:00:00'),
    (6,7,'2023-01-14 14:00:00'),
    -- pres7
    (7,2,'2023-01-14 14:00:00'),
    (7,3,'2023-01-14 14:00:00'),
    -- pres8
    (8,5,'2023-01-14 10:00:00'),
    (8,10,'2023-01-14 18:00:00'),
    -- pres9
    (9,10,'2023-01-14 10:00:00'),
    (9,5,'2023-01-14 14:00:00'),
    -- pres10
    (10,7,'2023-01-14 08:00:00'),
    (10,9,'2023-01-14 14:00:00'),
    -- pres11
    (11,1,'2023-01-14 10:00:00'),
    (11,3,'2023-01-14 18:00:00'),

    -- -- jour 7
    -- pres2
    (2,7,'2023-01-15 14:00:00'),
    (2,6,'2023-01-15 10:00:00'),
    -- pres3
    (3,7,'2023-01-15 16:00:00'),
    (3,8,'2023-01-15 18:00:00'),
    -- pres4
    (4,3,'2023-01-15 10:00:00'),
    (4,1,'2023-01-15 12:00:00'),
    -- pres5
    (5,1,'2023-01-15 16:00:00'),
    (5,7,'2023-01-15 18:00:00'),
    -- pres6
    (6,10,'2023-01-15 12:00:00'),
    (6,8,'2023-01-15 14:00:00'),
    -- pres7
    (7,3,'2023-01-15 16:00:00'),
    (7,6,'2023-01-15 14:00:00'),
    -- pres8
    (8,8,'2023-01-15 10:00:00'),
    (8,9,'2023-01-15 18:00:00'),
    -- pres9
    (9,5,'2023-01-15 14:00:00'),
    (9,8,'2023-01-15 14:00:00'),
    -- pres10
    (10,9,'2023-01-15 12:00:00'),
    (10,2,'2023-01-15 12:00:00'),
    -- pres11
    (11,8,'2023-01-15 12:00:00'),
    (11,1,'2023-01-15 08:00:00');



INSERT INTO active VALUES
    -- prestataire 1
    (1,1),
    (1,2),
    (1,3),
    -- prestataire 2
    (2,1),
    (2,3),
    (2,2),
    -- prestataire 3
    (3,1),
    (3,3),
    (3,2),
    -- prestataire 4
    (4,1),
    (4,4);

INSERT INTO stars VALUES

    -- client 18
    (2, 18, 4),
    (3, 18, 1),
    (4, 18, 2),
    (5, 18, 4),
    (6, 18, 3),
    (7, 18, 1),
    (8, 18, 4),
    (9, 18, 3),
    (10, 18, 4),
    -- client 19
    (2, 19, 3),
    (3, 19, 1),
    (4, 19, 1),
    (5, 19, 4),
    (6, 19, 3),
    (7, 19, 3),
    (8, 19, 1),
    (9, 19, 3),
    (10, 19, 4),
    -- client 20
    (2, 20, 3),
    (3, 20, 1),
    (4, 20, 3),
    (5, 20, 4),
    (6, 20, 3),
    (7, 20, 1),
    (8, 20, 2),
    (9, 20, 3),
    (10, 20, 4),
    -- client 21
    (2, 21, 4),
    (3, 21, 1),
    (4, 21, 1),
    (5, 21, 2),
    (6, 21, 5),
    (7, 21, 1),
    (8, 21, 2),
    (9, 21, 3),
    (10, 21, 3);
