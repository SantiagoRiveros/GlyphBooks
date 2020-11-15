import { AGREGAR_CARRITO, REMOVER_CARRITO } from "../constants/cart.constants";

const initialState = {
  productos: [],
  items: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
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
