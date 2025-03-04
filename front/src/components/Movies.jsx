const ListOfMovie= ({movies})=>{
  return(
    <ul className="movies">
    {
      movies.map(movie =>(
        <li  className="movie" key={movie.key}>
          <h2>{movie.title}</h2>
          <span>{movie.year}</span>
          <img src={movie.poster} alt="" />
        </li>
    ))}
  </ul>
  )
}

const NoMoviesResult =()=>{
  return (
   <p>No se encontraron peliculas para esta busqueda</p>
  )
}

const Movies=({movies})=>{
 const hasMovies = movies?.length > 0
 return (
  
    hasMovies 
    ? <ListOfMovie movies={movies}/> 
    : <NoMoviesResult/>
    
  
  
 )
}

export default Movies