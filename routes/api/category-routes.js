const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock'],
            }]
        })
        .then(data => {
            res.json(data)
        });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    let id = req.params.id;
    Category.findByPk(id, {
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock']
            }]
        })
        .then(data => {
            res.json(data)
        });;
});

router.post('/', (req, res) => {
    // create a new category
    Category.create({ category_name: req.body.category_name })
        .then((category) => {
            res.status(200).json(category);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });

});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    let id = req.params.id;
    Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
            where: { id: req.params.id }
        })
        .then(data => {
            res.json(req.params.category_name + ' deleted from categories');
        });
});

module.exports = router;