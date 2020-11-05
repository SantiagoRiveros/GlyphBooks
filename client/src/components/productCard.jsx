import React, { useState } from 'react';
import Portada from "../template/Images/poretada1.jpg"
import "../Sccs/Product.scss"

export default function Product(){

    return(
        <div className="Producto">
            <div className="Center">
            <img className="Libroimg"src={Portada}/>
            <div className="description">
            <h2 className="title">Harry potter 23</h2>
            <h3 className="Price">Precio: 19.99</h3>
            <h4 className="Stock">Stock: 23</h4>
            </div>
            </div>
        </div>
    )
}