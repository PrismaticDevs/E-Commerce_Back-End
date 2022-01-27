const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
            include: [
                { model: Product }
            ]
        })
        .then(data => {
            res.json(data)
        })
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Category.findByPk({
        include: [
            { model: Product }
        ]
    });
});

router.post('/', (req, res) => {
    // create a new category
    Category.create({ category_name: req.body.category_name }); //Unsure
    res.status(200);

});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update()
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;