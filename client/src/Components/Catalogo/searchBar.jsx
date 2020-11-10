import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [book, setBook] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(book);
      }}
    >
      <input
        type="text"
        placeholder="Autor, título, descripción..."
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
    </form>
  );
}

// Las lineas comentadas son parametros y funciones a utilizar o realizar mas adelante
