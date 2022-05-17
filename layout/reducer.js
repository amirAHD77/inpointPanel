import * as types from "../redux/types";
const initialState = { isSuperAdmin: true };
const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN: {
      console.log("payload", payload);
      return { ...state, tokenTimer: payload.expires_in };
    }
    case types.LOGOUT: {
      return { ...state };
    }
    case types.TOKEN_TIMER_COUNTER: {
      return { ...state, tokenTimer: state.tokenTimer - 1 };
    }
    default:
      return state;
  }
};

export default reducers;
