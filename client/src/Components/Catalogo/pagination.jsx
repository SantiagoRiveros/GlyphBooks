import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination({ page = 1 }) {
  const { push } = useHistory();

  return (
    <div>
      <button
        disabled={page === 1 || page === "1"}
        onClick={() => push(`/catalogo?page=${--page}`)}
      >
        Back
      </button>
      <button onClick={() => push(`/catalogo?page=${++page}`)}>Next</button>
    </div>
  );
}
