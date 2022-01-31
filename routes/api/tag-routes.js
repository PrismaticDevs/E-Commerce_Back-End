const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findAll, belongsTo } = require('../../models/Category');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    Tag.findAll({
        include: [
            { model: Product },
        ]
    }).then((data) => {
        res.json(data)
    });
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const id = req.params.id;
    Tag.findByPk(id)
        .then((data) => {
            res.json(data)
        });
});

router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body)
        .then((tag) => {
            res.status(200).json(tag);
        })
        .catch(e => {
            res.status(400).json(e);
        });
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Tag.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        .then((tag) => {
            res.status(200).json('Tag updated');
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
            where: { id: req.params.id }
        })
        .then(tag => {
            res.json('Tag deleted');
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;