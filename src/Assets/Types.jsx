import React from 'react'

function Types({data}) {
    return (
        <div className='data-types'>
        {data.map(pokeType => {
            if (pokeType.type.name === "normal") {
              return <button className='data-type-normal'>{pokeType.type.name}</button>
            }
            if (pokeType.type.name === "fighting") {
                return <p className='data-type-fighting'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "flying") {
                return <p className='data-type-flying'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "poison") {
                return <p className='data-type-poison'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "ground") {
                return <p className='data-type-ground'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "rock") {
                return <p className='data-type-rock'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "bug") {
                return <p className='data-type-bug'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "ghost") {
                return <p className='data-type-ghost'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "steel") {
                return <p className='data-type-steel'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "fire") {
                return <p className='data-type-fire'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "water") {
                return <p className='data-type-water'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "grass") {
                return <p className='data-type-grass'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "electric") {
                return <p className='data-type-electric'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "psychic") {
                return <p className='data-type-psychic'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "ice") {
                return <p className='data-type-ice'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "dragon") {
                return <p className='data-type-dragon'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "dark") {
                return <p className='data-type-dark'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "fairy") {
                return <p className='data-type-fairy'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "unknow") {
                return <p className='data-type-unknow'>{pokeType.type.name}</p>
              }
              if (pokeType.type.name === "shadow") {
                return <p className='data-type-shadow'>{pokeType.type.name}</p>
              }
})}
    </div>
  )
}

export default Types