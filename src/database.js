// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true
// })
// .then(db => console.log('DB is Conect'))
// .catch(err => console.error(err));

const mysql = require('mysql');
const { promisify } = require('util');
const { database_mysql } = require('../src/config/database');

const poll = mysql.createPool(database_mysql);

poll.getConnection((err, connection) => { 
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexión de base de datos fue cerrada');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('La base de datos posee muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('La conexion de la base de datos ha sido rechazada');
        }
    }
    
    if(connection) connection.release;
    console.log('Db is conected a mysql 123');

    return;
})

// Promisify poll querys
poll.query = promisify(poll.query);

module.exports = poll;