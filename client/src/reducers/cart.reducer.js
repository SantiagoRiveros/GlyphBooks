import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart.constants";

const initialState = {
  productos: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        productos: [...state.productos, action.producto],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        productos: state.productos.filter((e) => !e.id === action.id),
      };
    }
  }
}

export default cartReducer;
