const mysql = require('mysql2');

class DatabaseService{
    static #pool = undefined;

    constructor(){
        if(DatabaseService.#pool === undefined){
            DatabaseService.#pool = mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                database: process.env.DB_DATABASE,
                password: process.env.DB_PASSWORD,
                waitForConnections: true,
                connectionLimit: 100,
                queueLimit: 0,
            }).promise();
        }
    }

    getPool(){
        return DatabaseService.#pool;
    }
}

module.exports = DatabaseService;