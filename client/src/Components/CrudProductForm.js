import React, { useEffect, useState } from 'react';


export default function CrudProducts (action, product) {
    const [input, setInput] = useState({
        title: '',
        description: '',
        author: '',
        price: 0,
        stock: 0,
        img: '',
    })

    
    useEffect(() => {
        if (action === 'change') {
            input = input.product
        }else if(action === 'create') {
            input = input
        }
    })


    
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }


    const handleSubmit = (e) => {
        alert('Category was submitted: ' + e.target.value);
        e.preventDefault();
        }
        
            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={title} name ='title' onChange={handleChange}/>
                    </label>
                    <label>
                        Description:
                        <input type="text" value={description} name ='description' onChange={handleChange}/>
                    </label>
                    <label>
                        Author:
                        <input type="text" value={author} name ='author' onChange={handleChange}/>
                    </label>
                    <label>
                        Price:
                        <input type="num" value={price} name ='price' onChange={handleChange}/>
                    </label>
                    <label>
                        Stock:
                        <input type="num" value={stock} name ='stock' onChange={handleChange}/>
                    </label>
                    <label>
                        Img:
                        <input type="text" value={img} name ='img' onChange={handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                    <button>delete</button>
                </form>
            ); 

}