import * as actions from "../constants/actionTypes";
import * as api from "../api/api.js";
//action creators
export const getJars = (usr) => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchJars(usr._id);
    const action = { type: actions.FETCH_ALL_JARS, payload: data};
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const createJar = (jar) => async (dispatch, getState) => {
  //async(dispatch) comes from redux-thunk
  try {
    const { data } = await api.createJar(jar);
    const action = { type: actions.CREATE_JAR, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updateJar = (updatedJar) => async (dispatch) => {
  try {
    await api.updateJar(updatedJar);
    const action = { type: actions.UPDATE_JAR, payload: updatedJar };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deleteJar = (jar_id) => async (dispatch) => {
  try {
    await api.deleteJar(jar_id);
    const action = { type: actions.DELETE_JAR, payload: jar_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updateArrayOfJars = (newArrayOfJars) => async (dispatch) => {
  try {
    const newJar = newArrayOfJars.filter((j) => !j.hasOwnProperty("id"));
    let data = null;
    if (newJar.length > 0) {
      data = await api.createJar(newJar[0]);
    }
    newArrayOfJars
      .filter((j) => j.hasOwnProperty("id"))
      .map(async (jar) => await api.updateJar(jar));
    let updatedArray;
    if (data != null) {
      updatedArray = [
        ...newArrayOfJars.filter((j) => j.hasOwnProperty("id")),
        data.data,
      ];
    } else {
      updatedArray = newArrayOfJars.filter((j) => j.hasOwnProperty("id"));
    }
    const action = { type: actions.UPDATE_JAR_ARRAY, payload: updatedArray };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
