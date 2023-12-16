-- Active: 1702747766428@@aws.connect.psdb.cloud@3306@rinconnorte
CREATE DATABASE rinconNorte;

-- Path: backend/database.sql

USE rinconNorte;

-- Path: backend/database.sql

CREATE TABLE cheeseProduction (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date DATETIME DEFAULT NOW(),
    milk JSON
    kg INT,
    reposeStart DATETIME,
    rennetStart DATETIME,
);



CREATE TABLE providers (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)


CREATE TABLE products (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    materials JSON,
    processStages JSON,
    measuramentUnit VARCHAR(10) NOT NULL
)

CREATE TABLE process (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    productId VARCHAR(10) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    milk DOUBLE NOT NULL DEFAULT 0,
    status INT NOT NULL DEFAULT 0,
    currentStage INT NOT NULL DEFAULT 0,
    stagesTimes JSON
)


CREATE TABLE ingredients (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    measuramentUnit VARCHAR(10) NOT NULL
)
