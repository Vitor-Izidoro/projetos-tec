const programadorModel = require('../models/programador.model');

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
         const programador = await programadorModel.find({}).sort({ nome: 1});
         if (!programador) return res.status(406).json({error: 'Erro listar programador.'});
         return res.status(200).json(programador);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async programador_buscar(req, res) {
        try {
          const { id } = req.params;
          const data = await programadorModel.findById(id);
          if (!data) return res.status(406).json({ error: 'Erro consulta programador.'});
          return res.status(200).json(data);
        }catch (error) {
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

