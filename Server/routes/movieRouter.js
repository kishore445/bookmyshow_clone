const movieRouter = require('express').Router();
const {AddMovie,getAllMovies, updateMovies, deleteMovies, getMovieById}= require('../controller/movieController')
const { validateJWTToken } = require("../middleware/authMiddleware");


movieRouter.post('/addMovie', validateJWTToken,AddMovie);
movieRouter.get('/getAllMovies', validateJWTToken,getAllMovies);
movieRouter.patch('/updateMovie', validateJWTToken,updateMovies);
movieRouter.delete('/deleteMovie', validateJWTToken,deleteMovies);
movieRouter.get("/getMoviesById/:id",validateJWTToken,getMovieById);

module.exports= movieRouter