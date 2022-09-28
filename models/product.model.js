
// object, class
module.exports = (sequelize, Sequelize) => {
    // .define
    // 'name', 'schema', 'option'
    // '', {}, {}
    const product = sequelize.define(
        'product',
        {
            product_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: "product_id"
            },
            product_name: {
                type: Sequelize.STRING(200),
                field: "product_name"
            },
            description: {
                type: Sequelize.STRING(500),
                field: "description"
            },
            price: {
                type: Sequelize.REAL,
                field: "price",
            },
            category_id: {
                type: Sequelize.INTEGER,
                field: 'category_id'
            },
            quantity: {
                type: Sequelize.INTEGER,
                field: "quantity"
            }
            
        },
        {
            tableName: 'product',
            timestamps: false,
            freezeTableName: true
        }
    )
    return product
};