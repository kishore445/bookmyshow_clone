const movieRouter = require('express').Router();
const { AddMovie, getAllMovies, updateMovies, deleteMovies, getMovieById } = require('../controller/movieController');
const { validateJWTToken } = require("../middleware/authMiddleware");

movieRouter.post('/addMovie', validateJWTToken, AddMovie);
movieRouter.get('/getAllMovies', validateJWTToken, getAllMovies);
movieRouter.patch('/updateMovie', validateJWTToken, updateMovies);
movieRouter.delete('/deleteMovie/:id', validateJWTToken, deleteMovies);
movieRouter.get("/getMovieById/:id", validateJWTToken, getMovieById); 

module.exports = movieRouter;