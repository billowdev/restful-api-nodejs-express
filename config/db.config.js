require('dotenv').config()
const mysqlconf = {
    HOST: process.env.DB_HOST,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_DATABASE,
    DIALECT: 'mysql'
}

module.exports = {
    mysqlconf
}