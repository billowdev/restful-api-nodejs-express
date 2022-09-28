const productController = require('../controllers/product.controller');

const { product, category } = productController;

const findAllProduct = async (req, res) => {
    let data = await product.findAll({
        attributes: ['product_name', 'price'],
        include: [
            category,
            {
                model: category,
                attributes: ['category_name']
            }
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
        attributes: ['product_name', 'price'],
        include: [
            category,
            {
                model: category,
                attributes: ['category_name']
            }
        ],
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