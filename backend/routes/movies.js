const movieRouter = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { createMovieValidation, deleteValidation } = require('../utils/celebrateValidation');

movieRouter.get('/', getMovies);

movieRouter.post('/', createMovieValidation, createMovie);

movieRouter.delete('/:_id', deleteValidation, deleteMovie);

module.exports = movieRouter;
