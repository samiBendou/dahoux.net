import { checkAuthentication } from "../../common/core/data";
import { FETCH_AUTHENTICATION_REQUEST, FETCH_AUTHENTICATION_SUCCESS, FETCH_AUTHENTICATION_FAILURE } from "./types";

export const fetch = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    await checkAuthentication();
    dispatch(fetchSuccess());
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

const fetchRequest = () => {
  return {
    type: FETCH_AUTHENTICATION_REQUEST,
  };
};

const fetchSuccess = () => {
  return {
    type: FETCH_AUTHENTICATION_SUCCESS,
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_AUTHENTICATION_FAILURE,
    payload: error,
  };
};

export default fetch;
