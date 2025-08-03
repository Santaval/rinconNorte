/**
 * Este archivo configura la conexión a la base de datos PostgreSQL
 */

// Variables de entorno
require('dotenv').config();

// Imports
const { Pool } = require('pg');

// Credenciales de la base de datos
const databaseConfig = {
    connectionString: process.env.DATABASE_URL
};

// Creando nueva pool para conectarse
const pool = new Pool(databaseConfig);

// Verificar la conexión
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.stack);
        return;
    }
    console.log('Conexión establecida con la base de datos');
    release();
});

// Consultas como promesas
pool.query = pool.query;

// Se exporta el módulo
module.exports = pool;
