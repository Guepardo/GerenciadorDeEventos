//Rotas para usuário; 
//Somente anexação de rotas com o devido controlador
module.exports = function(app){
	app.post('/u/usuario/cadastrar', app.controllers.usuario.cadastrar); 
	app.get('/u/alterar'           , app.controllers.usuario.alterar); 
	app.get('/u/deletar'           , app.controllers.usuario.deletar); 
	app.get('/u/alterarSessao'     , app.controllers.usuario.alterarSessao); 
	app.get('/u/visualizarSessao'  , app.controllers.usuario.visualizarSessao); 
	app.get('/u/loadSession'       , app.controllers.usuario.loadSession); 
}; 