const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
//var jwt = require('jwt-simple');
//var usuariosApi = models.usuarios

/**
 * facturasantiguasController.js
 *
 * @description :: Server-side logic for managing facturasantiguass.
 */
module.exports = {

    /**
     * usuariosController.list()
     */
    list: function (req, res) {
        models.contactos.findAll({ 
            attributes: { exclude: ["updatedAt"] }
          })
          .then(usuarios => {
             res.send(usuarios)
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },
    /**
     * contactosController.crear()
     */

     

    /**
     * 
     */
     crear: function (req, res) {
        let mail = req.body.mail;
        let name = req.body.name;
        models.contactos.create({
            nombre: name, correo :mail
        })  
        .then(()=>{          
          res.send("curso guardado")
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: 'Error when create curso.',
            error: err            
          })          
        })
    },



    
};
