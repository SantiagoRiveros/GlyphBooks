import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import SearchBar from "./searchBar";
import Producto from "./productCard.jsx";
import Pagination from "./pagination.jsx";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import { agregarAlCarrito } from "../../actions/actions";
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
  const [display, setDisplay] = useState([]);
  const { page } = useQuery();

  /*   useEffect(() => {
    axios
      .get(`http://localhost:3011/products/search?value=${data}`)
      .then(({ data }) => {
        setBook(data);
      })
      .catch((error) => console.log(error));
  });
 */
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?page=${page || 1}`)
      .then(({ data }) => {
        setProductos(data);
        setDisplay(data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    if (category) {
      setDisplay(
        productos.filter((p) => {
          return p.Categories && p.Categories.find((c) => c.id === category);
        })
      );
    } else setDisplay(productos);
  }, [category, productos]);

  const onSearch = (book) => {
    axios
      .get(`http://localhost:3000/products/search?value=${book}`)
      .then(({ data }) => {
        setDisplay(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.Fondo}>
      <Sidebar className={style.Sidebar} setCategory={setCategory} />
      <div className={style.Relleno}>
        <div className={style.Catalogue}>
          <button onClick={() => console.log(props.estado.user)}>ESTADO</button>
          <SearchBar onSearch={onSearch} />
          {display.length &&
            display.map((producto) => {
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
            })}
        </div>
        <Pagination page={page} quantity={display.length} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    estado: state
  };
};

export default connect(mapStateToProps)(Catalogue);
