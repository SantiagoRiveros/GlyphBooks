import React, { useState } from 'react';


export default function NewForm () {
    const [name, setName] = useState(false)
    const [description, setDescription] = useState(false)

      function handleSubmit(event) {
        alert('Category was submitted: ' + event.target.value);
        event.preventDefault();
      }
    
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} name ='name' onChange={(e) => (e.target.value)}/>
                </label>
                <label>
                    description:
                    <input type="text" value={description} name ='description' onChange={(e) => (e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        ); 
}



