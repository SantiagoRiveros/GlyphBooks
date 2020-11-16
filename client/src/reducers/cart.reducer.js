import { AGREGAR_CARRITO, REMOVER_CARRITO } from "../constants/cart.constants";

const initialState = {
  productos: [],
  items: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_CARRITO: {
      var found = false
      var newItems = state.items.map(product => {
        if(product.id === action.producto.id) {
          if(product.cantidad < action.producto.stock) {
            product.cantidad++;
          }
          found = true;
        }
        return product
      })
      if(found === false) {
        action.producto.cantidad = 1;
        return {
          ...state,
          items: [...state.items, action.producto]
        }
      }
      return {
        ...state,
        items: [...newItems]
      };
    }
    case REMOVER_CARRITO: {
      var deleteThis = false
      var newItems = state.items.map(product => {
        if(product.id === action.producto.id) {
          if(product.cantidad > 1) {
            product.cantidad--;
            return product;
          } else {
            deleteThis = true
          }
        }
      })
      if(deleteThis === true || action.cantidad === "all") {
        return {
          ...state,
          items: state.items.filter((e) => e !== action.producto),
        }
      }
      return {
        ...state,
        items: [...newItems]
      }
    };
    default:
      return state;
  }
};

export default cartReducer;
