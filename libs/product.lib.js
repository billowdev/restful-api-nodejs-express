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

const findById = async(req, res)=>{
    let product_id = req.params.id
    let data = await product.findOne({
        where: {
            product_id
        }
    })
    res.json({
        status: res.statusCode,
        data
    })
}

module.exports = {
    findAllProduct,
    findById
}