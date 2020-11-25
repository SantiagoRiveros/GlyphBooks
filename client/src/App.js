import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { agregarVarios, login } from "./actions/actions";
import axios from "axios";
// import ReactGA from "react-ga";

//componentes

import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import Login from "./components/Login.jsx";
import Faq from "./components/Faq";
import Catalogo from "./components/Catalogo/Catalogue";
import Producto from "./components/Catalogo/Product";
import Admin from "./components/Admin/admin";
import Carrito from "./components/Carrito/Carrito.jsx";
import NewUser from "./components/Forms/UserForm.jsx";
import ResetPassword from "./components/ResetPassword";
import Forgot from "./components/Forgot";
import Cuenta from "./components/User/user.jsx";
import Checkout from "./components/Checkout.jsx";

function App(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [localUser, setLocalUser, removeLocalUser] = useLocalStorage(
    "user",
    undefined
  );

  const [carritoLocal, setCarritoLocal] = useLocalStorage("carrito", []);

  useEffect(() => {
    if (localUser) {
      if (localUser.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localUser.token}`;
        // ReactGA.set({ userId: localUser.user.id });
      } else {
        axios.defaults.headers.common["Authorization"] = ``;
        // ReactGA.set({ userId: undefined });
      }
    } else {
      axios.defaults.headers.common["Authorization"] = ``;
      // ReactGA.set({ userId: undefined });
    }
    dispatch(login(localUser?.user || "guest"));
  }, [localUser, dispatch]);

  useEffect(() => {
    setCarritoLocal(props.carrito.cart.items);
  }, [props.carrito.cart.items, setCarritoLocal]);

  useEffect(() => {
    if (!localUser) {
      dispatch(agregarVarios(carritoLocal));
    } else {
      let { id: idUser } = localUser.user;
      axios
        .get(`http://localhost:3000/users/${idUser}/cart`)
        .then(({ data }) => {
          if (data[0]) {
            dispatch(agregarVarios(data[0].products));
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(agregarVarios(carritoLocal));
        });
    }
  }, []);

  return (
    <Router>
      <NavBar
        logOut={() => {
          removeLocalUser();
          setCarritoLocal([]);
          dispatch(agregarVarios([]));
        }}
        onCartClick={() => setShow((prevShow) => !prevShow)}
        localUser={localUser}
      />
      <Carrito cartShow={show} items={props.carrito.cart.items} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/catalogo" render={() => <Catalogo />} />
        <Route path="/faq" component={Faq} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => <Producto id={match.params.id} />}
        />
        <Route
          path="/ingresar"
          render={() => <Login setLocalUser={setLocalUser} />}
        />
        <Route
          path="/checkout/:orderId"
          render={() => (
            <Checkout
              setLocalUser={setLocalUser}
              localUser={localUser}
              items={props.carrito.cart.items}
            />
          )}
        />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={NewUser} />
        <Route path="/password" component={ResetPassword} />
        <Route path="/forgot" component={Forgot} />
        <Route
          path="/cuenta"
          render={() => (
            <Cuenta
              logOut={() => {
                removeLocalUser();
                setCarritoLocal([]);
                dispatch(agregarVarios([]));
              }}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    carrito: state,
  };
};

export default connect(mapStateToProps)(App);
