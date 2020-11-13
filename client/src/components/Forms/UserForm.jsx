import React, { useState } from "react";
import axios from "axios";

export default function NewForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    shippingAdress: "",
    googleId: "",
  });

  const handleInputSubmit = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    axios.post(`http://localhost:3000/user`, input).then(() => {
      alert("user was submitted");
    });

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input
          type="text"
          value={input.firstName}
          name="firsName"
          onChange={handleInputSubmit}
        />
      </label>
      <label>
        LastName:
        <input
          type="text"
          value={input.lastName}
          name="lastName"
          onChange={handleInputSubmit}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          value={input.password}
          name="password"
          onChange={handleInputSubmit}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={input.email}
          name="email"
          onChange={handleInputSubmit}
        />
      </label>
      <label>
        ShippingAdress:
        <input
          type="text"
          value={input.shippingAdress}
          name="shippingAdress"
          onChange={handleInputSubmit}
        />
      </label>
      <label>
        GoogleIde:
        <input
          type="num"
          value={input.googleId}
          name="googleId"
          onChange={handleInputSubmit}
        />
      </label>
      <input type="submit" value="input.Submit" />
    </form>
  );
}
