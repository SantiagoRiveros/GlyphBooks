import { LOGIN, LOGOUT } from "../constants/user.constants";

const initialState = { name: "guest" };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        name: action.name,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        name: "guest",
      };
    }
    default:
      return state;
  }
}

export default userReducer;
