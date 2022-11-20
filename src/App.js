import Main from "./Assets/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonDetail from "./Assets/PokemonDetail";
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Main/>}/>
  <Route exact path="categories/:pokeid" element={<PokemonDetail/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
