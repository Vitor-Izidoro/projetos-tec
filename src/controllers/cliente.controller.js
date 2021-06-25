const clienteModel = require('../models/cliente.model');

class clienteController {
    async cliente_inserir(req, res) {
        try {
            const cliente = await Cliente.create(req.body);
            if (!cliente) return res.status(406).json({error: 'Erro insere cliente.'})
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async cliente_listar(req, res) {
        try {
            const cliente = await clienteModel.find({}).sort({ nome: 1});
            if (!cliente) return res.status(406).json({error: 'Erro listar cliente.'});
            return res.status(200).json(cliente);
           } catch (error) {
               return res.status(400).json(error);
        }
    }

    async cliente_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await clienteModel.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta cliente.'});
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async cliente_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async cliente_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = clienteController;

