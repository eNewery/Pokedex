import React from 'react'
import Types from './Types'

function Stats({stats}) {
setTimeout(() => {
    const divPadre = document.querySelector(".stats")
    const divStats = document.createElement("div")
    divPadre.appendChild(divStats)
    divStats.classList.add("div-stats")
    
    divStats.innerText = `Base Stats: ${stats[0].base_stat}`
}, 1);    
return (
    <div className='container-stats'>
<div className="stats"></div>

    </div>
    )
}

export default Stats;