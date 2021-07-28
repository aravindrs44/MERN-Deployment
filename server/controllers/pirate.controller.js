const Pirate = require("../models/pirate.model");

module.exports.findAllPirates = (req, res) => {
    Pirate.find({}).sort({name : 'asc'})
        .then(allPirates => res.json({allPirates}))
        .catch(err => res.status(400).json({err}))
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({newPirate}))
        .catch(err => res.status(400).json({err}))
}

module.exports.findOnePirate = (req, res) => {
    const {id} = req.params;
    Pirate.find({_id: id})
        .then(onePirate => res.json({onePirate}))
        .catch(err => res.status(400).json({err}))
}

module.exports.editPirate = (req, res) => {
    const {id} = req.params;
    Pirate.findOneAndUpdate({_id: id}, req.body)
        .then(editedPirate => res.json({editedPirate}))
        .catch(err => res.status(400).json({err}))
}

module.exports.deletePirate = (req, res) => {
    const {id} = req.params;
    Pirate.findByIdAndDelete({_id: id})
        .then(deletedPirate => res.json({deletedPirate}))
        .catch(err => res.status(400).json({err}))
}