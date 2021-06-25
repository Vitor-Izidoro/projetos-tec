const express = require('express')
const router = express.Router()
const controller = require('../controllers/chefe.controller.js')
const itemcontroller = new controller()

router.post('/inserir', itemcontroller.chefe_inserir);
router.get('/listar', itemcontroller.chefe_listar);
router.get ('/buscar/:id', itemcontroller.chefe_buscar);
router.put('/atualizar/:id', itemcontroller.chefe_atualizar);
router.delete('/remover/:id', itemcontroller.chefe_remover);

module.exports = router;

  