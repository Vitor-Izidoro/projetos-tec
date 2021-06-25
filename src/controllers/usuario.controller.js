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
            const usuario = await Usuario.create({nome: 'Lucca', sobrenome: 'Capim', data_de_nasciento:'2005-03-08', tempo_de_jogo: '5', email: 'lucca.souza@tecpuc.com.br'});
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

module.exports = usuarioController;
