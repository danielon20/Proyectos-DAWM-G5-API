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
        models.registro_curso.findAll({ 
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
        var id1 = req.params.id;

        models.registro_curso.findAll({ 
            where: {
              id_usuario: id1
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
                //console.log(usuario)
                res.send(usuario)
            }
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },


    getUsersCurso: function (req, res) {
        var id1 = req.params.idCurso;

        models.registro_curso.findAll({ 
            where: {
              id_curso: id1
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
                //console.log(usuario)
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
        let curso = req.body.id_curso;
        let usuario = req.body.id_usuario;
        let fecha = req.body.fecha_registro;
        let calificacion = req.body.calificacion;
        models.registro_curso.create({
            id_usuario: usuario, id_curso: curso, fecha_registro: fecha, calificacion: calificacion
        })  
        .then(()=>{          
          res.send("Registro con  ??xito")
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: 'Error when registro curso',
            error: err            
          })          
        })
    },

    borrar: function (req, res) {
        var id1 = req.params.userId;
        var id2 = req.params.courseId
        models.registro_curso.destroy({
            where: {
                id_usuario: id1,
                id_curso: id2
              }
        })  
        .then(()=>{
            res.json({message : 'Registro/s borrado con exito'});
        })
        .catch(err => res.status(500).json({
            message: 'Error when delete registrer.',
            error: err
          }))
    },

    actualizarNota: function (req, res) {
      var id1 = req.params.userId;
      var id2 = req.params.courseId;
      let nota = req.body.puntaje;
      models.registro_curso.update({calificacion: nota},{
          where: {
              id_usuario: id1,
              id_curso: id2
            }
      })  
      .then(()=>{
          res.json({message : 'Calificacion actualizada con exito'});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Error when update score.',
          error: err
        })
      })
  }



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
