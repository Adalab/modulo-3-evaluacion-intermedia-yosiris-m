import "../stylesheets/App.css";
import "../stylesheets/reset.css";
import React, { useState } from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

function App() {
  const [data, setData] = useState(pokemons);

  return (
    <div>
      <h1 className="title">Mi lista de pokemon</h1>
      <ul>
        <PokeList list={data} />
      </ul>
    </div>
  );
}

export default App;
