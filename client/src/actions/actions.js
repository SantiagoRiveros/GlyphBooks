import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART } from "../constants";


export function login(name) {
  return {
    type: LOGIN,
    name,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function addToCart() {
  return {
    type: ADD_TO_CART,
  };
}

export function removeFromCart() {
  return {
    type: REMOVE_FROM_CART,
  };
}
