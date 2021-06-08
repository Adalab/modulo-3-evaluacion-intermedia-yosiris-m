import "../stylesheets/PokeList.css";
import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const listPoke = props.list.map((item, index) => {
    return <Pokemon key={index} item={item} />;
  });

  return <ul className="listPokemon">{listPoke}</ul>;
};

export default PokeList;
