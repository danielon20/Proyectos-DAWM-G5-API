var express = require('express');
var router = express.Router();
var registroCursosController = require('../controllers/registroCursosController.js');

/*
 * GET
 */
router.get('/', registroCursosController.list);

/*
 * GET
 */

router.get('/:id', registroCursosController.getUser);

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