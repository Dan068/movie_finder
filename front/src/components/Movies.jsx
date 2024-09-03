const ListOfMovie= ({movies})=>{
  return(
    <ul>
    {movies.map(movie =>(
      <li key={movie.imdbID}>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt="" />
        <span>{movie.year}</span>
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