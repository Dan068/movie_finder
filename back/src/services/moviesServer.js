const Movie = require('../models/modelMovies');

const getmovies = async ()=>{
    return await Movie.find();
};

const createmovie = async(movie)=>{
    return await Movie.create(movie);
};

module.exports = {
    getmovies,
    createmovie,
}