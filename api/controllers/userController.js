const path = require('path');
const db= require("../database/models")
const Users = require("../database/models/users.js");
const fs = require("fs");
const Sequelize = require("sequelize")
const  Op  = Sequelize.Op

const userController={
    listaUsuarios: function(req, res){
        db.Users.findAll({
            attributes: {
                exclude: ['password', 'admin_user']
            }
        })
        .then(function(usuarios){
            return res.json({
                total: usuarios.length,
                data: usuarios
            });
        })
            
    },
    detalleUsuario: function(req, res){
        db.Users.findByPk(req.params.id)
        .then(function(usuario){
                res.json(usuario)
        })
        
    }

}

module.exports=userController