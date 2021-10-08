import { checkAuthentication } from "../../common/core/data";
import { FETCH_AUTHENTICATION_REQUEST, FETCH_AUTHENTICATION_SUCCESS, FETCH_AUTHENTICATION_FAILURE } from "./types";

export const fetchAuthentication = () => async (dispatch) => {
  dispatch(fetchAuthenticationRequest());
  try {
    await checkAuthentication();
    dispatch(fetchAuthenticationSuccess());
  } catch (error) {
    dispatch(fetchAuthenticationFailure(error));
  }
};

export const fetchAuthenticationRequest = () => {
  return {
    type: FETCH_AUTHENTICATION_REQUEST,
  };
};

export const fetchAuthenticationSuccess = () => {
  return {
    type: FETCH_AUTHENTICATION_SUCCESS,
  };
};

export const fetchAuthenticationFailure = (error) => {
  return {
    type: FETCH_AUTHENTICATION_FAILURE,
    payload: error,
  };
};
