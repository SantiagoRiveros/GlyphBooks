import React, {useEffect, useState} from 'react';
import axios from 'axios'

export default({setCategorias})=>{
    useEffect(() => {
        axios.get("http://localhost:3000/category")
        .then(data => {setCategorias(data)})
    })
    //HandleClick muestra donde se hizo click, entonces OnClick=HandleClick(category.name)
    HandleClick((event)=>{
        setCategorias(event.target.innerHTML);
    }, [])
    return(
        <div>
            <h1>CATEGORIAS</h1>
            <ul>
                {props.category.map((category)=>{
                    return <li OnClick={HandleClick}>{category.name}</li>
                })}
            </ul>
        </div>
    )
}