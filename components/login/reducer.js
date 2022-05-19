import * as types from "../../redux/types";
const initialState = {};
const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN: {
      return { ...state, user: payload };
    }
    case types.LOGOUT: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducers;
