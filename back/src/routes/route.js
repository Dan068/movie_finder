const {Router} = require('express');
const {viewAllMovies, createNewMovie} = require('../controllers/controler')

const router = Router();

router.get('/movies', viewAllMovies);
router.post('/movies', createNewMovie);
module.exports = router;
