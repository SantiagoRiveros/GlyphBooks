import React from 'react';

export default(props)=>{
    return(
    <div>
        <img src= {props.img}/>
        <h1>{props.title}</h1>
        <h2>${props.price}</h2>
    </div>
    )
}