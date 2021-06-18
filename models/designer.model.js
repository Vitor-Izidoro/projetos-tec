var designer={

    nome: "",
    sobrenome: "",
    idade: '',
    salario: '',
    referencias:'',
    
    Endereco:{
        cidade:'',

        bairro:'',

        rua:'',

        numero:'',
        

        

    }   
    
}

// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome:{type:String, required: true},
    idade: { type: Number, required: true, default: 0 },
    tempo_de_jogo: { type: Number, required: true, default: 0 },
    email: { type: String, required: true }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Cliente', ClienteSchema, 'cliente');
