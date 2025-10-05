const movieRouter = require('express').Router();
const {AddMovie,getAllMovies, updateMovies, deleteMovies}= require('../controller/movieController')
const { validateJWTToken } = require("../middleware/authMiddleware");


movieRouter.post('/addMovie', validateJWTToken,AddMovie);
movieRouter.get('/getAllMovies', validateJWTToken,getAllMovies);
movieRouter.patch('/updateMovie', validateJWTToken,updateMovies);
movieRouter.delete('/deleteMovie', validateJWTToken,deleteMovies)

module.exports= movieRouter