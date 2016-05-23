module.exports = (app) => {
	app.post('/c/participar', app.controllers.convite.participar); 
	app.post('/c/cancelar'  , app.controllers.convite.cancelar); 
	app.get('/c/listar'    , app.controllers.convite.listar); 
}; 