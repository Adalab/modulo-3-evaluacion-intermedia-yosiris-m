import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Pokemon.css";

const Pokemon = (props) => {
  const types = props.item.types.map((type, index) => (
    <li key={index} className="pokemonType">
      {type}
    </li>
  ));

  const handleClick = () => {
    props.onFavorite(props.item.id);
    console.log("click", props.item.id);
  };

  return (
    <div className="pokemon" onClick={handleClick}>
      <img src={props.item.url} alt="pokemon" />
      <div className="pokemonName">{props.item.name}</div>
      <ul className="pokemonTypeList">{types}</ul>
      <div className="pokeFav">{props.item.favorite ? "❤️" : "🤍"}</div>
    </div>
  );
};
Pokemon.propTypes = {
  name: PropTypes.string,
};

export default Pokemon;
