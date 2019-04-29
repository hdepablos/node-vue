module.exports = {
    database_mysql: {
        connectionLimit: process.env.LIMITCONNECTION=10, //mysql connection pool length
        host: process.env.HOST || 'localhost',
        port: process.env.PORTBD,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.NAMEBASEDATO
    }
}