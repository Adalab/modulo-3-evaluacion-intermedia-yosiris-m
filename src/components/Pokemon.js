import React from "react";
import "../stylesheets/Pokemon.css";

const Pokemon = (props) => {
  console.log(props.item);
  const types = props.item.types.map((type) => (
    <li className="pokemonType">{type}</li>
  ));

  return (
    <li className="pokemon">
      <img src={props.item.url} />
      <div className="pokemonName">{props.item.name}</div>
      <ul className="pokemonTypeList">{types}</ul>
    </li>
  );
};

export default Pokemon;
