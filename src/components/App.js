import "../stylesheets/App.css";
import "../stylesheets/reset.css";
import React, { useState } from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

function App() {
  const [data, setData] = useState(pokemons);

  const handleFavorite = (pokemonId) => {
    const pokemon = data.find((pokemon) => pokemonId === pokemon.id);

    if (pokemon.favorite === true) {
      pokemon.favorite = false;
    } else {
      pokemon.favorite = true;
    }
    setData([...data]);
    console.log("pokemon", pokemon);
  };

  return (
    <div>
      <h1 className="title">Mi lista de pokemon</h1>
      <ul>
        <PokeList list={data} onFavorite={handleFavorite} />
      </ul>
      <p></p>
    </div>
  );
}

export default App;
