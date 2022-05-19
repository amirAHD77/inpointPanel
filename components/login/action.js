import * as types from "../../redux/types";

export const loginAction = (props) => {
  return {
    type: types.LOGIN,
    payload: props,
  };
};
