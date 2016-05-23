var mongoose = require('mongoose'); 

module.exports = (app) =>{
	var conviteSchema = mongoose.Schema({
		evento: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Evento"}, 
		usuario: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Usuario"},
		hash_id: {type: String, required: true, unique: true}, //Identificador único para o convite 
		data_criacao: {type: Date, default: new Date()}
	}); 


	return mongoose.model("Convite", conviteSchema); 
}; 