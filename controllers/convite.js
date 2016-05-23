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

				var qtdEvento = 0; 
				var status    = false;

				Convite.count({evento : evento._id}, (error, count) => {
					if(error) return; 

					status 	  = true; 
					qtdEvento = count; 

				}); 

				if(!status){
					res.json({status: false, msg: "Error to count capacidade_max"}); 
					return; 
				}

				if(qtdEvento >= evento.capacidade_max){
					res.json({status: false, msg: "max capacity reached"}); 
					return; 
				}

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
			var session  = req.session;
			var eventoId = req.body.eventoId; 

			Convite.findOne({ hash_id: md5(session._id + evento._id)}). 
			populate('evento'). 
			exec((error, convite) => {
				if(error){
					res.json({status: false, msg: error}); 
					return; 
				}	

				if(convite == null ){
					res.json({status: false, msg: "Convite notfound"}); 
					return; 
				}; 

				var result = {
					nome_evento: convite.evento.nome, 
					descricao_evento: convite.evento.descricao, 
					data: convite.evento.data_criacao, 
					hash_id: convite.hash_id
				}; 

				convite.remove(() => {
					res.json({status: true, msg: result}); 
				}); 
			}); 
		}, 



		listar: function(req, res, next){
			var session = req.session; 

			Convite.find({usuario: session._id}). 
			populate('evento'). 
			exec((error, convites) => {
				if(error){
					res.json({status: false, msg: error}); 
					return; 
				}	


				var arrayResult = new Array(); 

				for(var a = 0; a < convites.length; a++){
					var item = {
						evento:{
							nome: convites[a].evento.nome, 
							descricao: convites[a].evento.descricao,
							data_evento: convites[a].evento.data_evento
						}, 
						convite: {
							data_convite: convites[a].data_criacao
						}
					}; 

					arrayResult.push(item); 
				}

				res.json({status: true, msg: arrayResult}); 
			}); 	
		}
	}; 

	return controller; 
}; 