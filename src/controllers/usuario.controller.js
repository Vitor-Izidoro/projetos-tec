/*const usuario = require('../models/usuario.model');

class usuarioController {
    async usuario_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_listar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async usuario_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = usuarioController;*/

const usuarioModel = require('../models/usuario.model.js');

class usuarioController {
    async usuario_inserir(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            if (!usuario) return res.status(406).json({error: 'Erro insere usuario.'})
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_listar(req, res) {
        try {
         const usuario = await usuarioModel.find({}).sort({ nome: 1});
         if (!usuario) return res.status(406).json({error: 'Erro listar usuario.'});
         return res.status(200).json(usuario);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_buscar(req, res) {
        try {
          const { id } = req.params;
          const data = await usuarioModel.findById(id);
          if (!data) return res.status(406).json({ error: 'Erro consulta usuario.'});
          return res.status(200).json(data);
        }catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_atualizar(req, res) {
        try {
          const usuario = await usuarioModel.findByIdAndUpdate(req.parms.id, { $set:req.body});
          if (!usuario) return res.status(406).json({ error: 'Erro atualização usuario'});
          return res.status(400).json(error);
        } catch {
            return res.status(400).json(error);
        }
    }

    async usuario_remover(req, res) {
        try {
            const usuario = await usuarioModel.findByIdAndRemove(req.parms.id);
            if (!usuario) return res.status(406).json({error:'Erro exclusão Usuario'})
            return res.status(200).json(usuario);
         }catch {
             return res.status(400).json(error);
         }
     }
 
 }

module.exports = usuarioController;
