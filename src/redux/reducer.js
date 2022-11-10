import { getItemFromLocal, saveItemToLocal } from "../utils/localStorage";
import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  repoData: getItemFromLocal("repoData") || [],
  followersData: getItemFromLocal("followersData") || [],
};

export const reducer = (state = initState, { type, payload }) => {
    console.log({payload})
  switch (type) {
    case types.GET_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
      case types.GET_DATA_SUCCESS:
          console.log("success",{payload})
      saveItemToLocal("repoData", payload.repoData);
      saveItemToLocal("followersData", payload.followersData);
      return {
        ...state,
        isLoading: false,
        isError: false,
        repoData: payload.repoData,
        followersData: payload.followersData,
      };
    case types.GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
