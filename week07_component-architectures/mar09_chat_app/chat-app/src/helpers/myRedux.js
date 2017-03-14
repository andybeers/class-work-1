const store = {
  _state: {},
  _callbacks: [],

  getState() {
    return this._state;
  },

  setState(newState) {
    this._state = newState;
    for (let cb of this._callbacks) {
      cb(newState);
    }
  },

  subscribe(cb) {
    this._callbacks.push(cb);
  }
};

export default store;
