const Actor = require('./Actor')
const Genre = require('./Genre')
const Director = require('./Director')
const Movie = require('./Movie')

Movie.belongsToMany(Actor, {through: 'MoviesActor'})
Actor.belongsToMany(Movie, {through: 'MoviesActor'})

Movie.belongsToMany(Director, {through: 'MoviesDirector'})
Director.belongsToMany(Movie, {through: 'MoviesDirector'})

Movie.belongsToMany(Genre, {through: 'MoviesGenre'})
Genre.belongsToMany(Movie, {through: 'MoviesGenre'})