import { LOGIN, LOGOUT } from "../constants/user.constants";
import { AGREGAR_CARRITO, REMOVER_CARRITO } from "../constants/cart.constants";
import { BUSCAR_PRODUCTOS } from "../constants/search.constants";


export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function agregarAlCarrito(producto) {
  return {
    type: AGREGAR_CARRITO,
    producto,
  };
}

export function removerCarrito(producto) {
  return {
    type: REMOVER_CARRITO,
    producto,
  };
}

export function buscarProductos(productos) {
  return {
    type: BUSCAR_PRODUCTOS,
    productos,
  };
}