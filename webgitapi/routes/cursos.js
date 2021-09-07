var express = require('express');
var router = express.Router();
var cursosController = require('../controllers/cursoController.js');

/*
 * GET
 */
router.get('/', cursosController.list);

/*
 * GET
 */

router.get('/:id', cursosController.getCurso);

/*
 * GET
 */
//router.get('/user/:id', reporteventasController.show_per_user);

/*
 * POST
 */
//router.post('/', reporteventasController.create);

/*
 * PUT
 */
//router.put('/:id', reporteventasController.update);

/*
 * DELETE
 */
//router.delete('/:id', reporteventasController.remove);

module.exports = router;
