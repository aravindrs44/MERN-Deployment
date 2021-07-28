const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get('/api/pirates', PirateController.findAllPirates)
    app.get('/api/pirates/:id', PirateController.findOnePirate)
    app.post('/api/pirates/new', PirateController.createPirate)
    app.put('/api/pirates/edit/:id', PirateController.editPirate)
    app.delete('/api/pirates/delete/:id', PirateController.deletePirate)
}