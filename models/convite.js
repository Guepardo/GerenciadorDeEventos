var mongoose = require('mongoose'); 

module.exports = (app) =>{
	var conviteSchema = mongoose.Schema({
		evento: {type: ObjectId, required: true, ref: "Evento"}, 
		usuario: {type: ObjectId, required: true, ref: "Usuario"}, 
		data_criacao: {type: Date, default: new Date()}
	}); 


	return mongoose.modelSchema("Convite", conviteSchema); 
}; 