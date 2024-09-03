const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: String,
    poster: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    description: String

    
});
const Movie =  mongoose.model('VistaPeliculas', moviesSchema);
module.exports = Movie;