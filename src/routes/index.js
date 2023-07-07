const express = require('express');
const router = express.Router();
const actorRouter = require('./actor.router')
const directorRouter = require('./director.router')
const genreRouter = require('./genre.router')
const movieRouter = require('./movie.router')

router.use('/actors', actorRouter)
router.use('/directors', directorRouter)
router.use('/genres', genreRouter)
router.use('/movies', movieRouter)

module.exports = router;