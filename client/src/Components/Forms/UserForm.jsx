import React, { useState } from 'react';


export default function NewForm () {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        shippingAdress: '',
        googleId: '',
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
                    FirstName:
                    <input type="text" value={firstName} name ='firsName' onChange={handleInputSubmit}/>
                </label>
                <label>
                    LastName:
                    <input type="text" value={lastName} name ='lastName' onChange={handleInputSubmit}/>
                </label>
                <label>
                    Password:
                    <input type="text" value={password} name ='password' onChange={handleInputSubmit}/>
                </label>
                <label>
                    Email:
                    <input type="text" value={email} name ='email' onChange={handleInputSubmit}/>
                </label>
                <label>
                    ShippingAdress:
                    <input type="text" value={shippingAdress} name ='shippingAdress' onChange={handleInputSubmit}/>
                </label>
                <label>
                    GoogleIde:
                    <input type="num" value={googleId} name ='googleId' onChange={handleInputSubmit}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        ); 
}