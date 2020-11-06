import React from "react";

export default function Product(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.img} />
      <h2>{props.description}</h2>
      <h3>${props.price}</h3>
      <h3>{props.stock} Unidades disponibles</h3>
    </div>
  );
}
