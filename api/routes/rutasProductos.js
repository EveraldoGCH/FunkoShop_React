const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()
const db= require("../database/models")
const Products = require("../database/models/products");


router.get('/lista', controllerProductos.lista)
router.get('/:id', controllerProductos.productDetails)

module.exports=router