import React, { useState } from "react";
import { UseFetch } from "./UseFetch";
import { Cards } from "./Cards";
import Loading from "./Loading";
const Main = () => {
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
const state = UseFetch(url)
const {loading, data} = state;
return(
<div className="main">
   {/*  <div className="search">
<input placeholder="Search" onMouseMove={() => {
        const search = document.querySelector(".search-2")
        search.classList.add("search-width")
        }} onMouseOut={() => {
            const search = document.querySelector(".search-2")
            search.classList.remove("search-width")
        }} class="search-2"/>
    </div> */}
{
    loading
    ?
   <Loading/>
    :
    <Cards results={data.results}/>
}
<div className="prev-next">
<button className="btn-go-id" onClick={() => setUrl(data.previous)}>Previous</button>
<button className="btn-go-id" onClick={() => setUrl(data.next)}>Next</button>
</div>
    </div>
)
}

export default Main