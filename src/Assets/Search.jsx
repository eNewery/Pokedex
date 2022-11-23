import React from 'react'
import Loading from './Loading';
import { useState, useEffect } from "react"
import axios from "axios"
function Search() {
   /*
const [pokemonData, setPokemonData] = useState([]);
const [pokemon, setPokemon  ] = useState([]);
const [busqueda, setBusqueda] = useState("")
const loadData = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
  .then(resp => {
    for (let i = 0; i < resp.data.results.length; i++) {
      axios.get(resp.data.results[i].url)
      .then(result => {
        setPokemonData(prevArray => [...prevArray, result.data])
      })
      
    }
  })
}
useEffect(() => {
loadData()
}, [])
const hadleChange = e => {
setBusqueda(e.target.value)
}
const filterPokemons = () => {
pokemonData.filter(p => {if (busqueda == p.name) {
  setPokemon(p)
}})
}
filterPokemons()
  return (
    <div>
        <div><input value={busqueda} onChange={hadleChange} type="text" name="" id="search" />
{pokemon.map(p => (
  <div>{p.name}</div>
))}
        </div>
      </div>
  )
} */ const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
  .then(response=>{
    for (let i = 0; i < response.results.length; i++) {
      axios.get(response.data.results[i].url)
      setUsuarios(response.data.results);
    setTablaUsuarios(response.data.results);
    }
    
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])
console.log(usuarios)
  return (
    <div className="App">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
        </button>
      
{setTimeout(() => {
  usuarios.results.map(p => (
    <div>{p.name}
    {p.id}
    </div>

  ))
}, 3)};

    </div>
  );
}

export default Search;