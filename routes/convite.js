module.exports = (app) => {
	app.post('/participar', app.controller.convite.participar); 
	app.post('/cancelar', app.controller.convite.cancelar); 
	app.post('/listar', app.controller.convite.listar); 
}