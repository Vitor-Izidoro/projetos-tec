const cliente = require('../models/cliente.model');

class clienteController {
    async cliente_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async cliente_listar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async cliente_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
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

