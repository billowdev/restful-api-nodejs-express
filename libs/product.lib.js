const productController = require('../controllers/product.controller');

const { product, category } = productController;

const findAllProduct = async (req, res) => {
    let data = await product.findAll({
        include: [
            category
        ]
    });
    res.json({
        status: res.statusCode,
        data
    })
}

module.exports = {
    findAllProduct
}