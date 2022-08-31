require("dotenv").config(); // this is important!
const connect = require('tedious').Connection()
const config = {
    server: process.env.DB_HOST,
    authentication: {
        type: 'default',
        options: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        }
    },
    options: {
        instanceName: "SQLEXPRESS",
        database: process.env.DB_DATABASE,
        rowCollectionOnRequestCompletiion: true
    }
}
let conn = connect(config)
module.exports = conn;