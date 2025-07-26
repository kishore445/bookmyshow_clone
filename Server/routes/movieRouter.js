const movieRouter = require('express').Router();
const {AddMovie}= require('../controller/movieController')


movieRouter.post('/add-movie', AddMovie);

module.exports= movieRouter