module.exports = (app) => {
	app.post('/participar', app.controllers.convite.participar); 
	app.post('/cancelar'  , app.controllers.convite.cancelar); 
	app.post('/listar'    , app.controllers.convite.listar); 
}; 