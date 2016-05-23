//Rotas para usuário; 
//Somente anexação de rotas com o devido controlador
module.exports = function(app){
	app.post('/usuario/cadastrar', app.controllers.usuario.cadastrar); 
	// app.get('/alterar'  , app.controllers.usuario.alterar); 
	// app.get('/deletar'  , app.controllers.usuario.deletar); 
	app.get('/alterarSessao'     , app.controllers.usuario.alterarSessao); 
	app.get('/visualizarSessao'  , app.controllers.usuario.visualizarSessao); 
	app.get('/loadSession'       , app.controllers.usuario.loadSession); 

}; 