USE containerbank;

INSERT IGNORE INTO advisors VALUES (1, 'Guillaume', 'Genti');
INSERT IGNORE INTO advisors VALUES (2, 'Helene', 'Lapic');
INSERT IGNORE INTO advisors VALUES (3, 'Raphaelle', 'Lefrancois');
INSERT IGNORE INTO advisors VALUES (4, 'Marie', 'Ortega');
INSERT IGNORE INTO advisors VALUES (5, 'Juliette', 'Hofleur');
INSERT IGNORE INTO advisors VALUES (6, 'Pierre', 'Bonvou');

INSERT IGNORE INTO specialties VALUES (1, 'saving');
INSERT IGNORE INTO specialties VALUES (2, 'credits');
INSERT IGNORE INTO specialties VALUES (3, 'insurance');

INSERT IGNORE INTO advisor_specialties VALUES (2, 1);
INSERT IGNORE INTO advisor_specialties VALUES (3, 2);
INSERT IGNORE INTO advisor_specialties VALUES (3, 3);
INSERT IGNORE INTO advisor_specialties VALUES (4, 2);
INSERT IGNORE INTO advisor_specialties VALUES (5, 1);

INSERT IGNORE INTO types VALUES (1, 'credit');
INSERT IGNORE INTO types VALUES (2, 'debit');
INSERT IGNORE INTO types VALUES (3, 'charge');
INSERT IGNORE INTO types VALUES (4, 'atm');
INSERT IGNORE INTO types VALUES (5, 'fleet');
INSERT IGNORE INTO types VALUES (6, 'prepaid');

INSERT IGNORE INTO customers VALUES (1, 'Jean-Pierre', 'Deshaies', '5 Boulevard Diderot', 'Paris', '0639283726');
INSERT IGNORE INTO customers VALUES (2, 'Alphonse', 'Dubois', '115 bis rue Ordener', 'Paris', '0173243520');
INSERT IGNORE INTO customers VALUES (3, 'Léon', 'Vigouroux', '18 rue des Batignolles', 'Marseille', '0927115243');
INSERT IGNORE INTO customers VALUES (4, 'Maximilien', 'Lefeuvre', '71 avenue Henri Martin', 'Paris', '0729994738');
INSERT IGNORE INTO customers VALUES (5, 'Nathanaël', 'Devereaux', '31 rue Peclet', 'Lyon', '0476528374');
INSERT IGNORE INTO customers VALUES (6, 'Gustave', 'Blondeau', '23 rue Bichat', 'Bordeaux', '0172639974');
INSERT IGNORE INTO customers VALUES (7, 'Sara', 'Marchand', '21 place du Panthéon', 'Paris', '0655293388');
INSERT IGNORE INTO customers VALUES (8, 'Solenne', 'Desmarais', '17 rue Meynadier', 'Amiens', '0472991025');
INSERT IGNORE INTO customers VALUES (9, 'Nathalie', 'Côté', '11 rue Dussoubs', 'Paris', '0629947362');
INSERT IGNORE INTO customers VALUES (10, 'Françoise', 'Rochefort', '22 rue du Temple', 'Paris', '0182736429');

INSERT IGNORE INTO cards VALUES (1, 'Professionnelle', '2000-09-07', 1, 1);
INSERT IGNORE INTO cards VALUES (2, 'Personnelle', '2002-08-06', 6, 2);
INSERT IGNORE INTO cards VALUES (3, 'Cadeau FNAC', '2001-04-17', 2, 3);
INSERT IGNORE INTO cards VALUES (4, 'Bouygues Telecom', '2000-03-07', 2, 3);
INSERT IGNORE INTO cards VALUES (5, 'Pro', '2000-11-30', 3, 4);
INSERT IGNORE INTO cards VALUES (6, 'Total', '2000-01-20', 4, 5);
INSERT IGNORE INTO cards VALUES (7, 'Personnelle', '1995-09-04', 1, 6);
INSERT IGNORE INTO cards VALUES (8, 'Professionnelle', '1995-09-04', 1, 6);
INSERT IGNORE INTO cards VALUES (9, 'Amex', '1999-08-06', 5, 7);
INSERT IGNORE INTO cards VALUES (10, 'Pro', '1997-02-24', 2, 8);
INSERT IGNORE INTO cards VALUES (11, 'Credit Soge', '2000-03-09', 5, 9);
INSERT IGNORE INTO cards VALUES (12, 'Debit LCL', '2000-06-24', 2, 10);
INSERT IGNORE INTO cards VALUES (13, 'Credit Agricole', '2002-06-08', 1, 10);

INSERT IGNORE INTO payments VALUES (1, 7, '2017-03-04', 'McDonalds');
INSERT IGNORE INTO payments VALUES (2, 8, '2016-03-04', 'Zara');
INSERT IGNORE INTO payments VALUES (3, 8, '2018-06-04', 'Franprix');
INSERT IGNORE INTO payments VALUES (4, 1, '2015-09-04', 'Monoprix');
INSERT IGNORE INTO payments VALUES (5, 7, '2015-09-04', 'Tennis');
INSERT IGNORE INTO payments VALUES (6, 7, '2015-09-04', 'Football');
INSERT IGNORE INTO payments VALUES (7, 3, '2015-09-04', 'Carrefour');
INSERT IGNORE INTO payments VALUES (8, 2, '2015-09-04', 'EDF');
INSERT IGNORE INTO payments VALUES (1, 2, '2015-09-04', 'HM');
INSERT IGNORE INTO payments VALUES (4, 2, '2015-09-04', 'BHV Le Marais');
INSERT IGNORE INTO payments VALUES (5, 2, '2015-09-04', 'Monoprix');
INSERT IGNORE INTO payments VALUES (6, 2, '2015-09-04', 'Monoprix');
INSERT IGNORE INTO payments VALUES (10, 2, '2015-09-04', 'Biocbon');
INSERT IGNORE INTO payments VALUES (12, 2, '2015-09-04', 'Interflora');
INSERT IGNORE INTO payments VALUES (13, 2, '2015-09-04', 'EDF');
INSERT IGNORE INTO payments VALUES (11, 2, '2015-09-04', 'Croix rouge');

