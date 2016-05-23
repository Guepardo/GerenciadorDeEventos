
var mongoose = require('mongoose'); 

module.exports = (app) =>{
 var eventoSchema = mongoose.Schema({
 	nome      : {type: String, required: true, unique: true }, 
 	descricao : {type: String, required: true}, 
 	localidade:{
 		uf       : {type: Number, required: true}, 
 		endereco : {type: String, required: true}
 	}, 
 	capacidade_max: {type: Number, required: true}, 
 	capacidade_min: {type: Number, required: true}, 
 	inscr_periodo : {type: Date, required: true}, 
 	data_evento   : {type: Date, required: true}, 
 	data_criacao  : {type: Date, default: new Date()}
 	//usuario_criador: 
 }); 

 return mongoose.model("Evento", eventoSchema); 
}; 