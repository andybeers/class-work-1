import { LOGIN, SET_LOGIN } from '../constants/ActionTypes';

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

    default:
      return {
        ...state
      };
  }
}
