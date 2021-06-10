import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Pokemon.css";

const Pokemon = (props) => {
  console.log(props.item);
  const types = props.item.types.map((type) => (
    <li className="pokemonType">{type}</li>
  ));

  return (
    <div className="pokemon">
      <img src={props.item.url} alt="pokemon" />
      <div className="pokemonName">{props.item.name}</div>
      <ul className="pokemonTypeList">{types}</ul>
    </div>
  );
};
Pokemon.propTypes = {
  name: PropTypes.string,
};

export default Pokemon;
