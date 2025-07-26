const movieRouter = require('express').Router();
const {AddMovie,getAllMovies, updateMovies, deleteMovies}= require('../controller/movieController')


movieRouter.post('/addMovie', AddMovie);
movieRouter.get('/getAllMovies', getAllMovies);
movieRouter.patch('/updateMovie', updateMovies);
movieRouter.delete('/deleteMovie', deleteMovies)

module.exports= movieRouter