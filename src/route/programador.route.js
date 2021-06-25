const express = require('express')
const router = express.Router()
const controller = require('../controllers/programador.controller.js')
const itemcontroller = new controller()

router.post('/inserir', itemcontroller.programador_inserir);
router.get('/listar', itemcontroller.programador_listar);
router.get ('/buscar/:id', itemcontroller.programador_buscar);
router.put('/atualizar/:id', itemcontroller.programador_atualizar);
router.delete('/remover/:id', itemcontroller.programador_remover);

module.exports = router;

