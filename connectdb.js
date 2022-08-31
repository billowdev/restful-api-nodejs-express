
require("dotenv").config(); // this is important!
const Connection = require('tedious').Connection;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_DATABASE
const config = {
    server: process.env.DB_HOST,
    authentication: {
        type: 'default',
        options: {
            userName: dbUsername,
            password: dbPassword,

        }
    },
    options: {
        instanceName: "SQLEXPRESS",
        database: dbName,
        rowCollectionOnRequestCompletiion: true,
        encrypt: false,
        trustServerCertificate: true

    }
}
let conn = new Connection(config)


module.exports = conn;