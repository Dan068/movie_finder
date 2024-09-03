import movies_results from '../mocks/movies_results.json'
import no_results from '../mocks/no_results.json'

const useMovies =()=>{
  const movies = movies_results.Search
  
  const mappedMovies = movies?.map(movie=>({
   key : movie.imdbID,
   title : movie.Title,
   year: movie.Year,
   poster : movie.Poster,
  }))
  
  return {movies : mappedMovies }

}

export default useMovies
  