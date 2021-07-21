const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find().exec()
        .then(docs => {
            console.log(docs);

            if (docs.length) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: 'No entries in the database'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'POST /products',
                product: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Product.findById(id).exec()
        .then(doc => {
            console.log(doc);

            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'No entries in the database for this ID'
                });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.patch('/:id', (req, res, next) => {
    const { id } = req.params;

    res.status(200).json({
        message: `PATCH /products/${id}`
    });
});

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;

    Product.remove({ _id: id }).exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;