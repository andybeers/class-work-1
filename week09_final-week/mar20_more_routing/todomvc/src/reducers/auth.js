import { LOGIN, LOGOUT, HYDRATE_AUTH } from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  token: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case HYDRATE_AUTH:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        token: action.token,
      };

    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };

    default:
      return {
        ...state
      };
  }
}
