CREATE DATABASE rinconNorte;

-- Path: backend/database.sql

USE rinconNorte;

-- Path: backend/database.sql

CREATE TABLE cheeseProduction (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date DATETIME DEFAULT NOW(),
    milk JSON
    kg INT,
    reposeStart DATE,
    rennetStart DATE,
);



