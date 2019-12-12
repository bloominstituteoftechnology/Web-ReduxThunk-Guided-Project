import * as types from './actionTypes';
// STEP 7 OF THE GENERAL STEPS

// React components shouldn't worry about
// things like actions or action types!
// So we create these helpers
// for the components to consume.

// The arguments will be supplied
// by the React component

// The Counter component will
// be interested in this function!
export const increment = () => {
  return {
    type: types.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: types.DECREMENT,
  };
};

export const submit = () => {
  return { type: types.SUBMIT };
};

export const inputChange = (name, value) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value,
    },
  };
};

export const markTodo = (id, completed) => {
  return {
    type: types.MARK_TODO,
    payload: { id, completed },
  };
};

// with thunk we can create a special
// action creator that can do axios,
// and when the stuff comes back from the backend
// it can dispatch an action of 'SET_TODOS'
// with all of the todos from the backend
const getTodos = () => (dispatch) => {
  // do stuff
  // axios.... and we can dispatch the action once we have the todos
};
