import * as types from "../redux/types";

export const tokenCounter = (payload) => async (dispatch) => {
  dispatch({
    type: types.TOKEN_TIMER_COUNTER,
    payload,
  });
};

export const logout = (payload) => async (dispatch) => {
  try {
  } catch (err) {}
  dispatch({
    type: types.LOGOUT,
    payload,
  });
};
