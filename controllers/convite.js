var md5 = require('crypto-js/md5'); 

module.exports = (app) => {

	var Convite = app.models.convite; 
	var Evento  = app.models.evento; 
	//O ObjectId do usuário será recuperado através da sessão do usuário;

	var controller = {
		participar: function(req, res, next){
			var session = req.session; 

			var idEvento = req.body.idEvento; 
			console.log(idEvento); 

			//TO-DO: fazer a validação aqui posteriormente. 

			Evento.findOne({
				_id : idEvento 
			}).
			select('nome descricao _id'). 
			exec((error,evento) => {
				if(error){
					res.json({status: false, msg: error}); 
					return; 
				}

				if(evento == null ){
					res.json({status: false, msg: "'Evento' notfound. "}); 
					return;	
				}

				var convite = new Convite({
					usuario:  session._id, //_id is the ObjectId of client current logged. 
					evento :  evento._id,
					hash_id: md5(session._id + evento._id) //Evitar que um cliente se convide duas vezes para o mesmo eventos. 
				}); 

				convite.save((error, convite) => {
					if(error){
						res.json({status: false, msg: error}); 
						return; 
					}	

					var result = {
						nome: evento.nome, 
						descricao: evento.descricao
					}; 

					res.json({status: true, msg: result } ); 
				}); 
			}); 
		}, 

		cancelar: function(req, res, next ){
			res.json({msg: "I'm working fine."}); 
		}, 

		listar: function(req, res, next){
			res.json({msg: "I'm working fine."}); 
		}
	}; 

	return controller; 
}; 