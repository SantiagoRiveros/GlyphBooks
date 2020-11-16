import React, { useState, useEffect } from "react";
import style from "../CSS/searchBar.module.scss";
import { buscarProductos } from "../actions/actions";
import { connect } from "react-redux";
import axios from "axios";
import Catalogue from "./Catalogo/Catalogue"
import {useHistory} from "react-router-dom"

function SearchBar({onSearch}) {
  const [book, setBook] = useState("");
  const {push} = useHistory();

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        push("/catalogo")
      }}
    >
      <input
        className={style.input}
        type="text"
        placeholder="Autor, título, descripción..."
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
    </form>
  );
}


export default connect()(SearchBar);