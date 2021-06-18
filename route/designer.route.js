const express = require('express')
const router = express.Router()
const controller = require('../controllers/designer.controller.js')
const itemcontroller = new controller()

router.post('/inserir', itemcontroller.designer_inserir);
router.get('/listar', itemcontroller.designer_listar);
router.get ('/buscar', itemcontroller.designer_buscar);
router.put('/atualizar/:id', itemcontroller.designer_atualizar);
router.delete('/remover/:id', itemcontroller.designer_remover);

module.exports = router;

