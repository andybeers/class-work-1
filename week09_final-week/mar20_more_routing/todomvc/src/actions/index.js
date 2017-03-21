import * as types from '../constants/ActionTypes';
import fetcher from '../fetcher';

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const completeAll = () => ({ type: types.COMPLETE_ALL });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });

// This is a normal, synchronous action.
//
// export const login = (email, password) => ({
//   type: types.LOGIN,
//   email,
//   password,
// });

export const login =
  (username, password) =>
    (dispatch, getState) => {
      fetcher({
        method: 'POST',
        path: '/auth/signin',
        body: {
          username,
          password,
        }
      })
        .then((r) => r.json())
        .then(json => {
          if (json.error) {
            // Do something with error!
            return;
          }

          // Dispatch a login event
          dispatch({
            type: types.LOGIN,
            token: json.token,
          });

          localStorage.setItem('token', json.token);
        });
    };

export const logout = () => (dispatch, getState) => {
  dispatch({ type: types.LOGOUT, });
  localStorage.removeItem('token');
};

export const hydrateAuth = token => (dispatch) => {
  fetcher({
    method: 'GET',
    path: '/auth/verify',
    token: token,
  })
    .then(r => r.json())
    .then(json => {
      if (json.valid) {
        dispatch({
          type: types.HYDRATE_AUTH,
          isLoggedIn: !!token,
          token: token,
        });
      }
    });
};
