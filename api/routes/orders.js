const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST /orders'
    });
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params;

    res.status(200).json({
        message: `GET /orders/${id}`
    });
});

router.patch('/:id', (req, res, next) => {
    const {id} = req.params;

    res.status(200).json({
        message: `PATCH /orders/${id}`
    });
});

router.delete('/:id', (req, res, next) => {
    const {id} = req.params;

    res.status(200).json({
        message: `DELETE /orders/${id}`
    });
});

module.exports = router;