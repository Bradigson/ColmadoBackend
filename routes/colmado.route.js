const express = require('express');
const mongoose = require('mongoose');

const colmadoController = require('../controllers/colmado.controller');

const router = express.Router();

router
.get('/products', colmadoController.getProducts)
.post('/add_product', colmadoController.insertProducts)
.put('/update_product/:id', colmadoController.updateProducts)
.delete('/delete_product/:id', colmadoController.deleteproduct)

module.exports = router;