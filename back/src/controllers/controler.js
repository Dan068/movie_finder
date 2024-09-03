const {getmovies, createmovie} = require('../services/moviesServer');
const catchAsync = require('../utils/catchAsync');

const viewAllMovies = async(req, res) =>{
   const result = await getmovies();
    res.status(200).json(result);
        };

const createNewMovie = async(req, res)=>{
    const {title, poster, year, director, duration, genre, rate, description} = req.body;
    const newMovie = await createmovie({title, poster, year, director, duration, genre, rate, description});
    res.status(201).json({
        message: 'Pelicula añadida correctamente',
        newMovie
    });

};

module.exports={
    viewAllMovies: catchAsync(viewAllMovies),
    createNewMovie: catchAsync(createNewMovie),
}