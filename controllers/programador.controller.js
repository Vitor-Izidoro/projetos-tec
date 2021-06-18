const programador = require('../models/programador.model');

class programadorController {
    async programador_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "fununcia" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async programador_listar(req, res) {
        try {
            return res.status(200).json({ ok: "funciona" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async programador_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "foi" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async programador_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "aham" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async programador_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = programadorController;

