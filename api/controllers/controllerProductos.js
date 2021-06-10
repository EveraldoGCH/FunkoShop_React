const path = require('path');
const db= require("../database/models")
const Products = require("../database/models/products.js");
const fs = require("fs");
const Sequelize = require("sequelize")
const  Op  = Sequelize.Op

const controllerProductos={
lista: function(req, res){
    db.Products.findAll()
    .then(function(productos){
        return res.json({
            total: productos.length,
            data: productos
        });
    })
        
},
productDetails: function(req, res){
    db.Products.findByPk(req.params.id)
    .then(function(producto){
            res.json(producto)
    })
    
},
}

module.exports=controllerProductos