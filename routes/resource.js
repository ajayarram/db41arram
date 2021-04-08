var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cow_controller = require('../controllers/cow');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/resource/cow', cow_controller.cow_create_post);
// DELETE request to delete Costume.
router.delete('/resource/cow/:id', cow_controller.cow_delete);
// PUT request to update Costume.
router.put('/resource/cow/:id', cow_controller.cow_update_put);
// GET request for one Costume.
router.get('/resource/cow/:id', cow_controller.cow_detail);
// GET request for list of all Costume items.
router.get('/resource/cow', cow_controller.cow_list);
module.exports = router;