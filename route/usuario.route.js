const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuario.controller.js')
const itemcontroller = new controller()

router.post('/inserir', itemcontroller.usuario_inserir);
router.get('/listar', itemcontroller.usuario_listar);
router.get ('/buscar', itemcontroller.usuario_buscar);
router.put('/atualizar/:id', itemcontroller.usuario_atualizar);
router.delete('/remover/:id', itemcontroller.usuario_remover);

module.exports = router;

