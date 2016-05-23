module.exports = (app) =>{
	app.post('/e/cadastrar', app.controllers.evento.cadastrar);
	app.get('/e/alterar', app.controllers.evento.alterar); 
	app.get('/e/excluir', app.controllers.evento.excluir);
	app.get('/e/listar', app.controllers.evento.listar);
}; 