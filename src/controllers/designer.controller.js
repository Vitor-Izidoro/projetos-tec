const designerModel = require('../models/designer.model');

class designerController {
    async designer_inserir(req, res) {
        try {
            const designer = await Designer.create(req.body);
            if (!designer) return res.status(406).json({error: 'Erro insere designer.'})
            return res.status(200).json({ ok: "funcionou" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async designer_listar(req, res) {
        try {
         const designer = await designerModel.find({}).sort({ nome: 1});
         if (!designer) return res.status(406).json({error: 'Erro listar designer.'});
         return res.status(200).json(designer);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async designer_buscar(req, res) {
        try {
          const { id } = req.params;
          const data = await designereModel.findById(id);
          if (!data) return res.status(406).json({ error: 'Erro consulta designer.'});
          return res.status(200).json(data);
        }catch (error) {
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

