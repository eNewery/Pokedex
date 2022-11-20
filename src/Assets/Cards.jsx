import React from 'react'
import CardPokemon from './CardPokemon'

export const Cards = ({results}) => {
  return (
    <div className='container'>
      <ul className='cards-container'>
        {

          results.map(pokemon => (
            <li key={pokemon.name}>
              <CardPokemon url={pokemon.url}/>
              <h1></h1>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
