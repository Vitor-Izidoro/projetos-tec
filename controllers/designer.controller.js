const designer = require('../models/designer.model');

class designerController {
    async designer_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "funcionou" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async designer_listar(req, res) {
        try {
            return res.status(200).json({ ok: "esse tbm" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async designer_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "foi" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async designer_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async designer_remover(req, res) {
        try {
            return res.status(200).json({ ok: "amém" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = designerController;

