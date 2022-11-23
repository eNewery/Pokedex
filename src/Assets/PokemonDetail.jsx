import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import Stats from './Stats'
function PokemonDetail() {
const [items, setItems] = useState([])
const {pokeid} = useParams()

function createAbilities(data) {
const divAbilities = document.querySelector(".abilities");
const paragraph = document.createElement("p")
divAbilities.appendChild(paragraph)
paragraph.innerText =  `${data}`
}
setTimeout(() => {
  const image = items.sprites.front_default;
 const imgContainer = document.querySelector(".poke-detail-image")
 imgContainer.innerHTML = `<img width="226px" src="${image}"/>`
 console.log(items.abilities.map(ability => {
  createAbilities(ability.ability.name)
}))
}, 1);

 useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`).then((res) => res.json()).then((data) => {
        setItems(data)
    })
    }, []) 

    return (
    <div key={items.id} className='poke-detail'>
      <Link to="/"><span class="arrow material-symbols-outlined">
arrow_back
</span></Link>
      <div className="poke-detail-card">
        <div className="poke-detail-data">
        <div className="detail-id-name">
<h2>{items.id}</h2>
<h2>{items.name}</h2>
</div>
<div className="poke-detail-image"></div>
<div className="stats-height">
<Stats stats={items.stats}/>
<div className="height">Height: {items.height}</div>
<div className="weight">Weight: {items.weight}</div>

<div className="abilities-container">
<div className="abilities-title"><h3>Abilities</h3></div>
<div className="abilities">
</div>
</div>
</div>
        </div>
        </div>
    </div>

  )
}

export default PokemonDetail