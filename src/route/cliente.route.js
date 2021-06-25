const express = require('express')
const router = express.Router()
const controller = require('../controllers/cliente.controller.js')
const itemcontroller = new controller()

router.post('/inserir', itemcontroller.cliente_inserir);
router.get('/listar', itemcontroller.cliente_listar);
router.get ('/buscar/:id', itemcontroller.cliente_buscar);
router.put('/atualizar/:id', itemcontroller.cliente_atualizar);
router.delete('/remover/:id', itemcontroller.cliente_remover);

module.exports = router;

