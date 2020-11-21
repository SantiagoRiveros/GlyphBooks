import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import SearchBar from "./searchBar";
import Producto from "./productCard.jsx";
import Pagination from "./pagination.jsx";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import style from "../../CSS/catalogue.module.scss";
import axios from "axios";

function useQuery() {
  let search = useLocation().search;
  let result = search.slice(1).split("&");
  result = result.reduce((dataResult, item) => {
    const pair = item.split("=");
    dataResult[pair[0]] = pair[1];
    return dataResult;
  }, {});
  return result;
}

function Catalogue(props) {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);
  const [category, setCategory] = useState("");
  const { page } = useQuery();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/products?page=${page || 1}&category=${category}`
      )
      .then(({ data }) => {
        setProductos(data);
      })
      .catch((err) => console.log(err));
  }, [page, category]);

  const onSearch = (book) => {
    if (book.length) {
      setCategory(-1);
      axios
        .get(`http://localhost:3000/products/search?value=${book}`)
        .then(({ data }) => {
          setProductos(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={style.Fondo}>
      <Sidebar className={style.Sidebar} setCategory={setCategory} />
      <div className={style.Relleno}>
        <SearchBar onSearch={onSearch} />
        <div className={style.Catalogue}>
          {productos.count &&
            productos.rows.map((producto) => {
              if (producto.stock) {
                return (
                  <Producto
                    img={producto.img}
                    title={producto.title}
                    price={producto.price}
                    key={producto.id}
                    id={producto.id}
                    OnClick={() => push(`/productos/${producto.id}`)}
                    categories={producto.Categories}
                  />
                );
              }
            })}
        </div>
        {category >= 0 ? (
          <Pagination
            page={page}
            quantity={productos.count}
            rows={productos.rows?.length || 1}
          />
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    estado: state,
  };
};

export default connect(mapStateToProps)(Catalogue);
