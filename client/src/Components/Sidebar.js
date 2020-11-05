import React from 'react';

export default(props)=>{
    return(
        <div>
            <h1>CATEGORIAS</h1>
            <ul>
                {props.category.map((category)=>{
                    return <li>{category.name}</li>
                })}
            </ul>
        </div>
    )
}