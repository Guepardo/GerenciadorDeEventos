//Controlador do usuário; 
//Somente regras de negócio
module.exports = (app)=>{

	var Usuario = app.models.usuario; 
	controller = {
		//Apenas um teste. 
		cadastrar: function(req, res, next){
			//use query on request when method GET is used. 
			//Otherwise, use body or param. 
			var name     = req.query.name; 
			var lastName = req.query.lastName; 
			var cpf      = req.query.cpf;

			console.log(name); 
			var usuario = new Usuario({
				name: name, 
				lastName: lastName, 
				cpf: cpf
			});

			usuario.save((error, client)=>{
				if(error){
					res.json({'status': false, error: error});
					return;
				}
				
				res.json({'status': true, client: client}); 
			});  	 
		}, 




		alterar: function(req, res, next){
			res.json({'status': true, 'msg': 'everything is good alterar'}); 
		}, 




		deletar: function(req, res, next){
			res.json({'status': true, 'msg': 'everything is good deletar'}); 
		}
	}; 
	return controller; 
}; 