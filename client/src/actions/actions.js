import { LOGIN, LOGOUT } from "../constants/user.constants";
import { ADD_TO_CART, REMOVE_FROM_CART, AGREGAR_CARRITO, REMOVER_CARRITO } from "../constants/cart.constants";


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
