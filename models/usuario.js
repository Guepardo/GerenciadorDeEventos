//Modelo do usuário; 
//Criação do esquema de dados e métodos e procedimentos dos
var mongoose = require('mongoose'); 

module.exports = (app)=>{
	var usuarioSchema = mongoose.Schema({
		name    : {type: String, required: true}, 
		lastName: {type: String, required: false}, 
		cpf     : {type: Number, required: true, unique: true}
	}); 

	//function made just for fun and practice.
	usuarioSchema.method.sayMayName = () => {
		console.log("My name is whatever;"); 
	}; 

	return mongoose.model('Usuario',usuarioSchema); 
}; 