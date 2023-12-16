/**
 * Este archivo configura la conecciòn a la base de datos 
 */

// variables de entorno
require('dotenv').config()


// imports

// modulo mysql
const mysql = require('mysql') 

// credenciales de la base de daots
const database = {
    database: process.env.DB,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
        rejectUnauthorized: true
    }
}

// primesas de node
const {promisify} = require('util')


// creando nueva pool para conectarse
const pool = mysql.createPool(database)

// obteniendo conecciòn
pool.getConnection((err, connection) =>{
    // si se encuentra algùn error se lanza dependiendo del tipo de error
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){console.error('Connection closed')}
        if(err.code === 'ERR_CON_COUNT_ERROR'){console.error('Many connections ')}
        if(err.code === 'ENCONNREFUSE'){console.error('REFUSE CONECTION')}
    } 

    // si se realizò la conecciòn se lanza la conecciòn y se imprime en consola que la base de datos se ha conectado
    if(connection) connection.release()
        console.log('DB enable')
        return
    
})

// consultas como promesas
pool.query = promisify(pool.query)


// se exporta el mòdulo
module.exports = pool