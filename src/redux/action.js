import axios from "axios";
import * as types from "./actionTypes";

export const getUserData = (username) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DATA_LOADING });
    const { data: repoData } = await axios.get(`/${username}/repos`);
      const { data: followersData } = await axios.get(`/${username}/followers`);
      console.log({repoData})
    dispatch({
      type: types.GET_DATA_SUCCESS,
      payload: {repoData, followersData },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.GET_DATA_ERROR });
  }
};
