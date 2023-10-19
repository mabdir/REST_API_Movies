const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/**
 * Movie Routes
 */
router.get('/api/movies/', movieController.listmovie);
router.post('/api/movies/', movieController.insertSingleMovie);
router.patch('/api/movies/:id', movieController.updateSingleMovie);
router.delete('/api/movies/:id', movieController.deleteSingleMovie);

module.exports = router;