import * as actions from "../constants/actionTypes";
import * as api from "../api/api.js";

export const getUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchUser(user.email); 
    const action = { type: actions.FETCH_USER, payload: data.message };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    const action = { type: actions.CREATE_USER, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
