import * as types from '../constants/ActionTypes';

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const completeAll = () => ({ type: types.COMPLETE_ALL });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const login = (email, password) => ({
  type: types.LOGIN,
  email,
  password,
});

export const logout = () => ({ type: types.LOGOUT, });

export const setLogin = isLoggedIn => ({
  type: types.SET_LOGIN,
  isLoggedIn,
});
