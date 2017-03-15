import fetcher from './helpers/fetcher';

const initialState = {
  count: 0,
  roomsById: {},
  allRooms: [],
  messages: [],
  activeRoomId: null,
};

const DECREMENT           = 'DECREMENT';
const INCREMENT           = 'INCREMENT';
const RECEIVE_ALL_ROOMS   = 'RECEIVE_ALL_ROOMS';
const SET_ACTIVE_ROOM_ID  = 'SET_ACTIVE_ROOM_ID';
const SET_MESSAGES        = 'SET_MESSAGES';

function incrementReducer(state, action) {
  return {
    ...state,
    count: state.count + action.payload,
  };
}

function allRoomsReducer(state, action) {
  const rooms = action.payload;
  const roomsById = rooms.reduce(
    (acc, val) => ({ ...acc, [val.id]: val }),
    {}
  );

  const allRooms = rooms.map(room => room.id);

  return {
    ...state,
    roomsById,
    allRooms,
  };
}

export default function toplevelReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_ROOMS:
      return allRoomsReducer(state, action);

    case SET_ACTIVE_ROOM_ID: {
      return {
        ...state,
        activeRoomId: action.payload,
      };
    }

    case SET_MESSAGES: {
      return {
        ...state,
        messages: action.payload,
      };
    }

    case INCREMENT:
      return incrementReducer(state, action);

    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
}

/////////////////////////////////////
/// Action Creators
///////////////////////////////////

export const increment = (amount) => ({
  type: INCREMENT,
  payload: amount,
});

export const decrement = (amount) => ({
  type: DECREMENT,
  payload: amount,
});

export const receiveAllRooms = () => ({
  type: RECEIVE_ALL_ROOMS,
  promise:
    fetcher({
      path: '/rooms',
      method: 'GET',
    })
    .then(r => r.json()),

});

export const setActiveRoomId = (roomId) => ({
  type: SET_ACTIVE_ROOM_ID,
  payload: roomId,
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const doFetchAction = (activeRoomId) => {
  return (dispatch, getState) => {
    dispatch(receiveAllRooms());

    if (activeRoomId) {
      fetcher({
        path: `/rooms/${activeRoomId}/messages`,
        method: 'GET',
      })
      .then(r => r.json())
      .then(messages =>
        dispatch(setMessages(messages))
      );
    }
  };
};
