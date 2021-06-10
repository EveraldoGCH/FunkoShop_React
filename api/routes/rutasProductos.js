const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()
const db= require("../database/models")
const Products = require("../database/models/products");


router.get('/productlist', controllerProductos.lista)
router.get('/productdetails/:id', controllerProductos.productDetails)

module.exports=router