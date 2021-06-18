var chefe={

    nome: "",
    sobrenome: "",
    idade: '',
    salario: '',
    
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
    salario: { type: Number, required: true, default: 0 },
    Endereco: { type: String, required: true }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Chefe', ChefeSchema, 'chefe');
