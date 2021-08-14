var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET home page. */
router.get('/', function(req, res, next) {
  models.usuarios.findAll({ 
    attributes: { exclude: ["updatedAt"] }
  })
  .then(usuarios => {
     res.send(usuarios)
  })
  .catch(error => res.status(400).send(error))
});

/*
router.get('/cliente/:clienteId', function(req, res, next) {
  models.ordenes.findAll({ 
    where: {
      clienteId: req.params.clienteId
    },
    attributes: { exclude: ["updatedAt"] }   
  })
  .then(ordenes => {
     res.send(ordenes)
  })
  .catch(error => res.status(400).send(error))
});

router.post('/', function(req, res, next) {
  models.ordenes.create({
    fecha: new Date(), clienteId: 9, createdAt: new Date(), updatedAt: new Date()
  })  
  //res.json({message : 'Orden guardada'})
  .then(()=>{
    res.json({message : 'Orden guardada'})
    //console.log('Orden saved')
    //res.send('ddd')
  })
  .catch(error => res.status(400).send(error))
});

router.put('/', function(req, res, next) {
  models.ordenes.update({ fecha: new Date() }, {
    where: {
      clienteId: 9
    }
  })  
  .then(()=>{
    res.json({message : 'Orden Actualizada'})
  })
  .catch(error => res.status(400).send(error))
});

router.delete('/', function(req, res, next) {
  models.ordenes.destroy({
    where: {
      clienteId: 9
    }
  })  
  .then(()=>{
    res.json({message : 'Orden Borrada'})
  })
  .catch(error => res.status(400).send(error))
});
*/
module.exports = router;
