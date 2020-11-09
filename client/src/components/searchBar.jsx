import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(book);
      }}
    >
      <input
        type="text"
        placeholder="Search books..."
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
    </form>
  );
}

// Las lineas comentadas son parametros y funciones a utilizar o realizar mas adelante
