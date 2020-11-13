import { LOGIN, LOGOUT } from "../constants/user.constants";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart.constants";


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

export function addToCart(lineOrder) {
  return {
    type: ADD_TO_CART,
    lineOrder
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  };
}
