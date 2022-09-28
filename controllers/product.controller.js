const Sequelize = require('sequelize');
const { mysqlconf } = require('../config/config');
const db = require('../models');
const sequelize = new Sequelize(
    mysqlconf.database,
    mysqlconf.username,
    mysqlconf.password,
    {
        host: mysqlconf.host,
        dialect: mysqlconf.dialect
    }
);

db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.product = require('../models/product.model')(sequelize, Sequelize);
db.category = require('../models/category.model')(sequelize, Sequelize);

db.category.hasMany(
    db.product, {
    foreignKey: {
        name: 'category_id',
        field: 'category_id'
    }
}
)
db.product.belongsTo(
    db.category, {
    foreignKey: 'category_id'
}
)

module.exports = db;