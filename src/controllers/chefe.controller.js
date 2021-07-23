const chefeModel = require('../models/chefe.model.js');

class chefeController {
    async chefe_inserir(req, res) {
        try {
            const chefe = await chefeModel.create(req.body);
            if (!chefe) return res.status(406).json({error: 'Erro insere chefe.'})
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async chefe_listar(req, res) {
        try {
         const chefe = await chefeModel.find({}).sort({ Nome: 1});
         if (!chefe) return res.status(406).json({error: 'Erro listar chefe.'});
         return res.status(200).json(chefe);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async chefe_buscar(req, res) {
        try {
          const { id } = req.params;
          const data = await chefeModel.findById(id);
          if (!data) return res.status(406).json({ error: 'Erro consulta chefe.'});
          return res.status(200).json(data);
        }catch (error) {
            return res.status(400).json(error);
        }
    }

    async chefe_atualizar(req, res) {
        try {
          const chefe = await chefeModel.findByIdAndUpdate(req.parms.id, { $set:req.body});
          if (!chefe) return res.status(406).json({ error: 'Erro atualização chefe'});7
          return res.status(400).json(error);
        } catch {
            return res.status(400).json(error);
        }
    }

    async chefe_remover(req, res) {
        try {
           const chefe = await chefeModel.findByIdAndRemove(req.parms.id);
           if (!chefe) return res.status(406).json({error:'Erro exclusão Chefe'})
           return res.status(200).json(chefe);
        }catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = chefeController;
