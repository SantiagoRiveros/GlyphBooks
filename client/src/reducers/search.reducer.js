import { BUSCAR_PRODUCTOS } from "../constants/search.constants";


const initialState = {
  productos: [],
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
      case BUSCAR_PRODUCTOS: {
        return {
          ...state,
          productos: [...state.productos],
        };
      }
      default:
        return state;
    }
  }
  
  export default searchReducer;
  