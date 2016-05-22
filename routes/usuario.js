//Rotas para usuário; 
//Somente anexação de rotas com o devido controlador
module.exports = function(app){
	app.get('/cadastrar', app.controllers.usuario.cadastrar); 
	app.get('/alterar'  , app.controllers.usuario.alterar); 
	app.get('/deletar'  , app.controllers.usuario.deletar); 
}; 