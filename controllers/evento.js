var enumEstados = require('../enum/enum'); 

module.exports = (app) =>{

	var Evento = app.models.evento; 

	var controller = {
		cadastrar: function (req, res, next){
			var nome 			= req.body.nome;
			var descricao 		= req.body.descricao;
			var uf				= req.body.uf;
			var endereco 		= req.body.endereco;
			var capacidade_max  = req.body.capacidade_max; 
			var capacidade_min  = req.body.capacidade_min;
			var inscr_periodo   = req.body.inscr_periodo;

			//depois colocar uma validação dos dados aqui; 

			var evento = new Evento({
				nome: nome, 
				descricao: descricao, 
				localidade: {
					uf: uf, 
					endereco: endereco
				}, 
				capacidade_max: capacidade_max,
				capacidade_min: capacidade_min, 
				inscr_periodo: inscr_periodo
			}); 

			evento.save((error, evento)=>{
				if(error){
					res.json({ status: false, msg: error.errmsg}); 
					return; 
				}

				res.json({status: true, msg: "Cadastrado com sucesso."}); 
			}); 
		},


		alterar: function(req, res, next){
			res.json({msg: "alterar"}); 
		},


		excluir: function(req, res, next){
			res.json({msg: "excluir"});
		},


		listar: function(req, res, next ){
			Evento.find({}).
			limit(200). 
			select('nome descricao localidade'). 
			exec((error, collection) =>{
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return; 
				}

				var result = {
					status: true, 
					collection: collection, 
					enumEstados: enumEstados
				}; 
	
				res.render('lista.html',result); 
				// res.json(result); 
			}); 
		} 
	}; 

	return controller; 
}