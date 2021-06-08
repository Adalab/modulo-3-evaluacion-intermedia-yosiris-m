import "../stylesheets/App.css";
import "../stylesheets/reset.css";
import React, { useState } from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

function App() {
  const [data, setData] = useState(pokemons);

  return (
    <ul>
      <div>
        <PokeList list={data} />
      </div>
    </ul>
  );
}

export default App;
