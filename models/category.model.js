
// object, class
module.exports = (sequelize, Sequelize) => {
    // .define
    // 'name', 'schema', 'option'
    // '', {}, {}
    const category = sequelize.define(
        'category',
        {
            category_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: "category_id"
            },
            category_name: {
                type: Sequelize.STRING(45),
                field: "category_name"
            },
        },
        {
            tableName: 'category',
            timestamps: false,
            freezeTableName: true
        }
    )
    return category
};