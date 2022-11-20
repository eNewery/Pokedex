import React from 'react'
import Loading from './Loading';
import { UseFetch } from './UseFetch'
import Types from './Types';
import { Link } from "react-router-dom"
function CardPokemon({url}) {



  const stated = UseFetch(url)
const {loading, data} = stated;
  return (
    <div>{
      loading
      ?
<Loading/>
      :
      <div className='card'>
        <div className="data-id-name">
        <h2>{data.id}</h2>
        <h2>{data.name}</h2>
        </div>
        <div className="data-image">
        <img width={128} src={data.sprites.front_default} alt="" />
        </div>
<Link to={`/categories/${data.id}`}>See more</Link>
<Types data={data.types}/>
      </div>
      }</div>
  )
}

export default CardPokemon;