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
        models.usuarios.findAll({ 
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
     * usuariosController.getUser()
     */

     getUser: function (req, res) {
        var id1 = req.params.user;

        models.usuarios.findOne({ 
            where: {
              usuario: id1
            },
            attributes: { exclude: ["updatedAt"] }   
          })
          .then(usuario => {
            if (!usuario) {
                //No es necesario el return alado del res. ...//
                res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            else{
                res.send(usuario)
            }
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },


    /**
     * usuariosController.show()
     */
    show: function (req, res) {
        var id1 = req.params.id;

        models.usuarios.findOne({ 
            where: {
              id: id1
            },
            attributes: { exclude: ["updatedAt"] }   
          })
          .then(usuario => {
            if (!usuario) {
                //No es necesario el return alado del res. ...//
                res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            else{
                res.send(usuario)
            }
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },

    show_only_users: function (req, res) {
        models.usuarios.findAll({ 
            where: {
              tipo: 'Usuario'
            },
            attributes: { exclude: ["updatedAt"] }   
          })
          .then(usuarios_rol_user => {
            res.send(usuarios_rol_user)
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },

    /**
     * usuariosController.create()
     */
     create: function (req, res) {
        let email = req.body.correo;
        let name = req.body.name;
        let apellido = req.body.apellido;
        let username = req.body.usuario;
        let password = req.body.contrasena;
        console.log(name)
        models.usuarios.create({
            nombres: name, apellidos :apellido, correo: email, usuario:username, contra: password, tipo:'Usuario'
        })  
        //res.json({message : 'Orden guardada'})
        .then(()=>{
            res.json({message : 'Cliente guardado con exito!'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error when create user.',
                error: err
            })
        })
    },



    /**
     * facturasantiguasController.showF()
     */


   /* showF: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.find({idcliente: id}, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas by Id client.',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas by Id client'
                });
            }

            return res.json(facturasantiguas);
        });
    },*/





    

    /**
     * facturasantiguasController.update()
     */
   /* update: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findOne({_id: id}, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }

            facturasantiguas.idcliente = req.body.idcliente ? req.body.idcliente : facturasantiguas.idcliente;
			facturasantiguas.idFactura = req.body.idFactura ? req.body.idFactura : facturasantiguas.idFactura;
			facturasantiguas.fechaFactura = req.body.fechaFactura ? req.body.fechaFactura : facturasantiguas.fechaFactura;
			facturasantiguas.idProducto = req.body.idProducto ? req.body.idProducto : facturasantiguas.idProducto;
			facturasantiguas.codProducto = req.body.codProducto ? req.body.codProducto : facturasantiguas.codProducto;
			facturasantiguas.cantidad = req.body.cantidad ? req.body.cantidad : facturasantiguas.cantidad;
			facturasantiguas.precioUnitario = req.body.precioUnitario ? req.body.precioUnitario : facturasantiguas.precioUnitario;
			facturasantiguas.precioParcial = req.body.precioParcial ? req.body.precioParcial : facturasantiguas.precioParcial;
			
            facturasantiguas.save(function (err, facturasantiguas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating facturasantiguas.',
                        error: err
                    });
                }

                return res.json(facturasantiguas);
            });
        });
    },*/

    /**
     * facturasantiguasController.remove()
     */
    
    /*remove: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findByIdAndRemove(id, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the facturasantiguas.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }*/
};
