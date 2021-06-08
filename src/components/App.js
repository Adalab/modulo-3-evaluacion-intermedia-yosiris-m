import "../stylesheets/App.css";
import React, { useState } from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

function App() {
  const [data, setData] = useState(pokemons);

  return (
    <div>
      <PokeList list={data} />
    </div>
  );
}

export default App;
