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
ALTER TABLE advisor_specialties ADD CONSTRAINT fk_advisor_specialties_advisors FOREIGN KEY (advisor_id) REFERENCES advisors (id);
ALTER TABLE advisor_specialties ADD CONSTRAINT fk_advisor_specialties_specialties FOREIGN KEY (specialty_id) REFERENCES specialties (id);

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
  type_id    INTEGER NOT NULL,
  customer_id   INTEGER NOT NULL
);
ALTER TABLE cards ADD CONSTRAINT fk_cards_customers FOREIGN KEY (customer_id) REFERENCES customers (id);
ALTER TABLE cards ADD CONSTRAINT fk_cards_types FOREIGN KEY (type_id) REFERENCES types (id);
CREATE INDEX cards_name ON cards (name);

CREATE TABLE payments (
  id          INTEGER IDENTITY PRIMARY KEY,
  card_id      INTEGER NOT NULL,
  payment_date  DATE,
  description VARCHAR(255)
);
ALTER TABLE payments ADD CONSTRAINT fk_payments_cards FOREIGN KEY (card_id) REFERENCES cards (id);
CREATE INDEX payments_card_id ON payments (card_id);
