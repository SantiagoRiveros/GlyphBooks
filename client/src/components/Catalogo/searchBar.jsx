import React, { useState, useEffect } from "react";
import style from "../../CSS/searchBar.module.scss";
import axios from "axios";

export default function SearchBar({ onSearch }) {
  const [book, setBook] = useState("");

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(book);
      }}
    >
      <input
        className={style.input}
        type="text"
        placeholder="Autor, título, descripción..."
        /* value={book.toLowerCase().includes(props.title.toLowerCase())} */
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
    </form>
  );
}

// Las lineas comentadas son parametros y funciones a utilizar o realizar mas adelante
