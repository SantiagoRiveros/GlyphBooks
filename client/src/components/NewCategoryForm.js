import React, { useState } from 'react';


export default function NewForm () {
    const [input, setInput] = useState({
        name: '',
        description: '',
    })

    const handleInputSubmit = (e) => {
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
                    <input type="text" value={name} name ='name' onChange={handleInputSubmit}/>
                </label>
                <label>
                    description:
                    <input type="text" value={description} name ='description' onChange={handleInputSubmit}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        ); 
}



