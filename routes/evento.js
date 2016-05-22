module.exports = (app) =>{
	app.post('/cadastrar', app.controllers.evento.cadastrar);
	app.get('/alterar', app.controllers.evento.alterar); 
	app.get('/excluir', app.controllers.evento.excluir);
	app.get('/listar', app.controllers.evento.listar);
}; 