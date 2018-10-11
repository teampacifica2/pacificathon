DROP TABLE advisor_specialties IF EXISTS;
DROP TABLE advisors IF EXISTS;
DROP TABLE specialties IF EXISTS;
DROP TABLE payments IF EXISTS;
DROP TABLE cards IF EXISTS;
DROP TABLE types IF EXISTS;
DROP TABLE customers IF EXISTS;


CREATE TABLE advisors (
  id         INTEGER IDENTITY PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR(30)
);
CREATE INDEX advisors_last_name ON advisors (last_name);

CREATE TABLE specialties (
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);
CREATE INDEX specialties_name ON specialties (name);

CREATE TABLE advisor_specialties (
  advisor_id       INTEGER NOT NULL,
  specialty_id INTEGER NOT NULL
);

CREATE TABLE types (
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);
CREATE INDEX types_name ON types (name);

CREATE TABLE customers (
  id         INTEGER IDENTITY PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR_IGNORECASE(30),
  address    VARCHAR(255),
  city       VARCHAR(80),
  telephone  VARCHAR(20)
);
CREATE INDEX customers_last_name ON customers (last_name);

CREATE TABLE cards (
  id         INTEGER IDENTITY PRIMARY KEY,
  name       VARCHAR(30),
  birth_date DATE,
  type_id    INTEGER,
  customer_id   INTEGER
);

CREATE INDEX cards_name ON cards (name);

CREATE TABLE payments (
  id          INTEGER IDENTITY PRIMARY KEY,
  card_id      INTEGER,
  payment_date  DATE,
  description VARCHAR(255)
);
CREATE INDEX payments_card_id ON payments (card_id);
