/*

INITIALIZES A LOCAL DATABASE INSTANCE


*/

CREATE DATABASE LocalDatabase;
\c LocalDatabase;

CREATE TABLE Individuals (
  individualId IDENTITY PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE Addresses (
  addressId IDENTITY PRIMARY KEY, 
  individualId NUMBER NOT NULL,
  line1 VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  zip VARCHAR(11) NOT NULL
);