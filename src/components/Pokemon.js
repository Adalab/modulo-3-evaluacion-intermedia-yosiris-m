import React from "react";

const Pokemon = (props) => {
  console.log(props.item);
  const types = props.item.types.map((type) => <span>{type}</span>);

  return (
    <>
      <h4>{props.item.name}</h4>
      <div>{types}</div>
      <img src={props.item.url} />
    </>
  );
};

export default Pokemon;
