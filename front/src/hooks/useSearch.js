import { useEffect, useState, useRef } from "react"
const useSearch =()=>{

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('No se puede buscar una pelicula sin nombre')
      return
    }

    if(search.length < 3){
      setError('La busqueda debe de tener al menos 3 caracteres')
      return
    }

    setError(null)
  },[search])
  return {search, updateSearch, error}

}
export default useSearch