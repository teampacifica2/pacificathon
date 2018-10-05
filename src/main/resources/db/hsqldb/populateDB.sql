INSERT INTO advisors VALUES (1, 'Guillaume', 'Gentil');
INSERT INTO advisors VALUES (2, 'Helene', 'Lapic');
INSERT INTO advisors VALUES (3, 'Raphaelle', 'Lefrancois');
INSERT INTO advisors VALUES (4, 'Marie', 'Ortega');
INSERT INTO advisors VALUES (5, 'Juliette', 'Hofleur');
INSERT INTO advisors VALUES (6, 'Pierre', 'Bonvou');

INSERT INTO specialties VALUES (1, 'saving');
INSERT INTO specialties VALUES (2, 'credits');
INSERT INTO specialties VALUES (3, 'insurance');

INSERT INTO advisor_specialties VALUES (2, 1);
INSERT INTO advisor_specialties VALUES (3, 2);
INSERT INTO advisor_specialties VALUES (3, 3);
INSERT INTO advisor_specialties VALUES (4, 2);
INSERT INTO advisor_specialties VALUES (5, 1);

INSERT INTO types VALUES (1, 'credit');
INSERT INTO types VALUES (2, 'debit');
INSERT INTO types VALUES (3, 'charge');
INSERT INTO types VALUES (4, 'atm');
INSERT INTO types VALUES (5, 'fleet');
INSERT INTO types VALUES (6, 'prepaid');

INSERT INTO customers VALUES (1, 'Jean-Pierre', 'Deshaies', '5 Boulevard Diderot', 'Paris', '0639283726');
INSERT INTO customers VALUES (2, 'Alphonse', 'Dubois', '115 bis rue Ordener', 'Paris', '0173243520');
INSERT INTO customers VALUES (3, 'Léon', 'Vigouroux', '18 rue des Batignolles', 'Marseille', '0927115243');
INSERT INTO customers VALUES (4, 'Maximilien', 'Lefeuvre', '71 avenue Henri Martin', 'Paris', '0729994738');
INSERT INTO customers VALUES (5, 'Nathanaël', 'Devereaux', '31 rue Peclet', 'Lyon', '0476528374');
INSERT INTO customers VALUES (6, 'Gustave', 'Blondeau', '23 rue Bichat', 'Bordeaux', '0172639974');
INSERT INTO customers VALUES (7, 'Sara', 'Marchand', '21 place du Panthéon', 'Paris', '0655293388');
INSERT INTO customers VALUES (8, 'Solenne', 'Desmarais', '17 rue Meynadier', 'Amiens', '0472991025');
INSERT INTO customers VALUES (9, 'Nathalie', 'Côté', '11 rue Dussoubs', 'Paris', '0629947362');
INSERT INTO customers VALUES (10, 'Françoise', 'Rochefort', '22 rue du Temple', 'Paris', '0182736429');

INSERT INTO cards VALUES (1, 'Professionnelle', '2010-09-07', 1, 1);
INSERT INTO cards VALUES (2, 'Personnelle', '2012-08-06', 6, 2);
INSERT INTO cards VALUES (3, 'Cadeau FNAC', '2011-04-17', 2, 3);
INSERT INTO cards VALUES (4, 'Bouygues Telecom', '2010-03-07', 2, 3);
INSERT INTO cards VALUES (5, 'Pro', '2010-11-30', 3, 4);
INSERT INTO cards VALUES (6, 'Total', '2010-01-20', 4, 5);
INSERT INTO cards VALUES (7, 'Personnelle', '2012-09-04', 1, 6);
INSERT INTO cards VALUES (8, 'Professionnelle', '2012-09-04', 1, 6);
INSERT INTO cards VALUES (9, 'Amex', '2011-08-06', 5, 7);
INSERT INTO cards VALUES (10, 'Pro', '2007-02-24', 2, 8);
INSERT INTO cards VALUES (11, 'Credit Soge', '2010-03-09', 5, 9);
INSERT INTO cards VALUES (12, 'Debit LCL', '2010-06-24', 2, 10);
INSERT INTO cards VALUES (13, 'Credit Agricole', '2012-06-08', 1, 10);

INSERT INTO payments VALUES (1, 7, '2017-03-04', 'McDonalds');
INSERT INTO payments VALUES (2, 8, '2016-03-04', 'Zara');
INSERT INTO payments VALUES (3, 8, '2018-06-04', 'Franprix');
INSERT INTO payments VALUES (4, 1, '2015-09-04', 'Monoprix');
INSERT INTO payments VALUES (5, 7, '2015-09-04', 'Tennis');
INSERT INTO payments VALUES (6, 7, '2015-09-04', 'Football');
INSERT INTO payments VALUES (7, 3, '2015-09-04', 'Carrefour');
INSERT INTO payments VALUES (8, 2, '2015-09-04', 'EDF');
