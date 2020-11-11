import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import Searchbar from "./searchBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.scss";
import ReactPaginate from "react-paginate";
import "../../CSS/pagination.module.css";

export default function Catalogue() {
  const { push } = useHistory();
  this.state = {
    offset: 0,
    data: [],
    perPage: 9,
    currentPage: 0,
  };
  const [productos, setProductos] = useState([]);
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState([]);

  receivedData(() => {
    axios.get(`http://localhost:3000/products`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((producto) => (
        <React.Fragment>
          <Producto
            img={producto.img}
            title={producto.title}
            price={producto.price}
            key={producto.id}
            id={producto.id}
            OnClick={() => push(`/productos/${producto.id}`)}
            categories={producto.Categories}
          />
        </React.Fragment>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
      });
    });
  });

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => {
        setProductos(data);
        setDisplay(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (category) {
      setDisplay(
        productos.filter((p) => {
          return p.Categories && p.Categories.find((c) => c.id === category);
        })
      );
    } else setDisplay(productos);
  }, [category, productos]);

  const onSearch = (search) => {
    axios
      .get(`http://localhost:3000/products/search?value=${search}`)
      .then(({ data }) => {
        setDisplay(data);
      });
  };

  return (
    <div className={style.Fondo}>
      <Sidebar className={style.Sidebar} setCategory={setCategory} />
      <div className={style.Size}>
        <div className={style.Relleno}>
          <Searchbar onSearch={onSearch} />
          <div className={style.Catalogue}>
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
          <div>
            {this.state.postData}
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
