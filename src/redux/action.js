import axios from "axios";
import * as types from "./actionTypes";

export const getDataRequest = (username) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DATA_LOADING });
    const { data: repoData } = await axios.get(`/${username}/repos`);
    const { data: followersData } = await axios.get(`/${username}/followers`);
    dispatch({
      type: types.GET_DATA_LOADING,
      payload: { repoData, followersData },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.GET_DATA_ERROR });
  }
};
