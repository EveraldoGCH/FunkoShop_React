const express=require('express')
const router=express.Router()
const db= require("../database/models")
const Users = require("../database/models/users");
const userController = require('../controllers/userController');

router.get('/', userController.listaUsuarios)
router.get('/:id', userController.detalleUsuario)

module.exports = router;
