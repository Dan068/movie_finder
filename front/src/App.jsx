import './App.css'

import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import Movies from './components/Movies'


const API = 'https://www.omdbapi.com/'
const API_REQUEST ='http://www.omdbapi.com/?apikey=1159faca&s=midudev'
// 'https://www.omdbapi.com/?i=tt3896198&apikey=1159faca'



function App() {

   const {movies} = useMovies()
   const {search, updateSearch, error} = useSearch()

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log({search});    
  }
  const handleChange = (event)=>{
    updateSearch(event.target.value)

  }
  
 
 return(
   <>
      <div className='page'>
        <header>
         <h1>Buscador de Peliculas</h1>
           <form action="" onSubmit={handleSubmit} className='form'>
             <label htmlFor="">Nombre de la Pelicula</label>
             <input value={search} onChange={handleChange} name='title' placeholder='Batman'type="text" />
             <button>Buscar</button>

          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}

        </header>
     </div>


     <main>
      <Movies movies={movies}/>
     </main>
   </>
  )
}

export default App
