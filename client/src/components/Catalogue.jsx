import React, {useEffect, useState} from 'react';
import Producto from "./productCard.jsx"
import Sidebar from "./Sidebar.js"

export default function Catalogue(){
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products")
        .then(data => {setProductos(data)})
    }, [])
    return(
        <div>
            <Sidebar setCategorias={setCategorias}/>
           {productos && productos.map((producto) => {
               return <Producto img={producto.img} title={producto.title} price={producto.price}/>
           })}
        </div>
         
    )
}