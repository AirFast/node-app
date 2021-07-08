const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST /products'
    });
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params;

    res.status(200).json({
        message: `GET /products/${id}`
    });
});

router.patch('/:id', (req, res, next) => {
    const {id} = req.params;

    res.status(200).json({
        message: `PATCH /products/${id}`
    });
});

router.delete('/:id', (req, res, next) => {
    const {id} = req.params;

    res.status(200).json({
        message: `DELETE /products/${id}`
    });
});

module.exports = router;