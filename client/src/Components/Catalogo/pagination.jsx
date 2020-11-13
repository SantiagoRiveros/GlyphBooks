import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination({ page = 1, quantity }) {
  const { push } = useHistory();
  const pageLimit = Math.ceil(quantity / 9);
  return (
    <div>
      <button
        disabled={page === 1 || page === "1"}
        onClick={() => push(`/catalogo?page=${--page}`)}
      >
        Back
      </button>
      <h1>{page}</h1>
      <button onClick={() => push(`/catalogo?page=${++page}`)}>Next</button>
    </div>
  );
}
