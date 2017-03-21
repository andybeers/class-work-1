import { LOGIN, LOGOUT, SET_LOGIN } from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  email: 'foo',
  token: 'asdfasdfa',
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };

    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return {
        ...state
      };
  }
}
