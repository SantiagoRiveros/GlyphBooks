import { ADD_TO_CART, REMOVE_FROM_CART, AGREGAR_CARRITO, REMOVER_CARRITO } from "../constants/cart.constants";

const initialState = {
  productos: [],
  items: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        productos: [...state.productos, action.id],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        productos: state.productos.filter((e) => e.id !== action.id),
      };
    }
    case AGREGAR_CARRITO: {
      return {
        ...state,
        items: [...state.items, action.producto],
      };
    }
    case REMOVER_CARRITO: {
      return {
        ...state,
        items: state.items.filter((e) => e !== action.producto),
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
