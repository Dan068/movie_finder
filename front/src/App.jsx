import './App.css'

import useMovies from './hooks/useMovies'
import Movies from './components/Movies'
import { useRef } from 'react'

const API = 'https://www.omdbapi.com/'
const API_REQUEST ='http://www.omdbapi.com/?apikey=1159faca&s=midudev'
// 'https://www.omdbapi.com/?i=tt3896198&apikey=1159faca'



function App() {
   const {movies: mappedMovies} = useMovies()
   const inputRef = useRef()

  const handleSubmit = (event)=>{
    event.preventDefault()
    const inputElement = inputRef.current
    const value = inputElement.value
    console.log(value);
    
    
  }
  
 
 return(
   <>
      <div className='page'>
        <header>
         <h1>Buscador de Peliculas</h1>
           <form action="" onSubmit={handleSubmit} className='form'>
             <label htmlFor="">Nombre de la Pelicula</label>
             <input ref={inputRef} placeholder='Batman'type="text" />

             <button>Buscar</button>

          </form>

        </header>
     </div>


     <main>
      <Movies movies={mappedMovies}/>
     </main>
   </>
  )
}

export default App
