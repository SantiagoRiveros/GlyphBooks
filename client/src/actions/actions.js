import { LOGIN, LOGOUT } from "../constants";

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
