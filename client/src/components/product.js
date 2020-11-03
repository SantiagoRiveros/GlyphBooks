import React from 'react';

export default(props) => {
    <div>
        <h1>{props.title}</h1>
        <img src= {props.img}/>
        <h2>Autor: {props.author}</h2>
        <h2>Precio: ${props.price}</h2>
        <h2>Stock: {props.stock} unidades</h2>
        <h3>{props.description}</h3>
    </div>
}