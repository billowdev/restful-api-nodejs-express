require('dotenv').config()
const env = {
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  dbHost: process.env.DB_HOST
}

const mysqlconf = {
  host: env.dbHost,
  username: env.dbUsername,
  password: env.dbPassword,
  database: env.dbDatabase,
  dialect: 'mysql'
}



module.exports = {
  mysqlconf
}