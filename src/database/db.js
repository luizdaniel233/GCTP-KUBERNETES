const db = require('mysql2')
require("dotenv").config();

const database = {
    "host": process.env.HOST_DATABASE,
    "port": process.env.PORT_DATABASE,
    "user": "root",
    "password": "21092001",
    "database": process.env.DATABASE
}

const conexao = db.createConnection(database)

module.exports = conexao