import React, { useState } from "react";
import style from "../../CSS/searchBar.module.scss";

export default function SearchBar({ onSearch }) {
  const [book, setBook] = useState("");
  return (
    <form className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(book);
      }}
    >
      <input className={style.input}
        type="text"
        placeholder="Autor, título, descripción..."
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
    </form>
  );
}

// Las lineas comentadas son parametros y funciones a utilizar o realizar mas adelante
