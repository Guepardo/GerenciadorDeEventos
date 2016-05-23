//Controlador do usuário; 
//Somente regras de negócio
module.exports = (app)=>{

	var Usuario = app.models.usuario; 
	var controller = {
		//Apenas um teste. 
		cadastrar: function(req, res, next){
			//use query on request when method GET is used. 
			//Otherwise, use body or param. 
			var name     = req.body.name; 
			var lastName = req.body.lastName; 
			var cpf      = req.body.cpf;

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
		}, 

		alterarSessao: function(req, res, next ){
			var mudar 	= req.query.mudar; 
			var session = req.session; 

			session.mudar = mudar; 

			res.json({status: true}); 
		}, 


		visualizarSessao: function(req, res, next ){
			res.json({msg: "dados da minha sessão é: "+ req.session.mudar}); 
		}, 

		//Método provisório para carregar a sessão com uma ObjectId
		loadSession: function(req, res, next){
			var session = req.session; 

			Usuario.find({}).
			select("_id"). 
			limit(1). 
			exec((error, usuario) => {
				if(error){
					res.json({'status': false, 'msg': 'Error 1 '});  
					return;
				}


				if(usuario.length  == 0 ){
					res.json({'status': false, 'msg': 'Error 2'}); 
					return;
				}

				session._id = usuario[0]._id; 
				res.json({'status': true, 'msg': session._id}); 
			}); 
		}
	}; 

	return controller; 
}; 