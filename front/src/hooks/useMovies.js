import { useState } from 'react'
import movies_results from '../mocks/movies_results.json'
import no_results from '../mocks/no_results.json'

const useMovies =({search})=>{

  const API = 'https://www.omdbapi.com/'
  const API_REQUEST ='http://www.omdbapi.com/?apikey=1159faca&s='
// 'https://www.omdbapi.com/?i=tt3896198&apikey=1159faca'
//https://www.omdbapi.com/?apikey=1159faca&s=


  const [responseMovies, setResponseMovies] = useState([])
  

  const movies = movies_results.Search
  
  const mappedMovies = movies?.map(movie=>({
   key : movie.imdbID,
   title : movie.Title,
   year: movie.Year,
   poster : movie.Poster,
  }))
  
  const getMovies =()=>{
    if(search ){
      // fetch(`https://www.omdbapi.com/?apikey=1159faca&s=${search}`)
      // .then(res => res.json())
      // .then(json =>{
      //   setResponseMovies(json)
      // })
      setResponseMovies(movies_results)
      console.log(responseMovies);
      console.log('results');
      } else {
      setResponseMovies(no_results)
      console.log(responseMovies);
      console.log('no results');
      
      
    }
  }
  
  return {movies : mappedMovies, getMovies }

}

export default useMovies
  