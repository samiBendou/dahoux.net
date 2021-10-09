import { cloneData, getData, postData, postprocessData, preprocessData } from "../../common/core/data";
import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
  UPDATE_PORTFOLIO_REQUEST,
  UPDATE_PORTFOLIO_SUCCESS,
  UPDATE_PORTFOLIO_FAILURE,
} from "./types";

const fetch = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const data = await getData("bendou");
    const preprocessed = preprocessData(cloneData(data));
    dispatch(fetchSuccess(data, preprocessed));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

const fetchRequest = () => {
  return {
    type: FETCH_PORTFOLIO_REQUEST,
  };
};

const fetchSuccess = (data, preprocessed) => {
  return {
    type: FETCH_PORTFOLIO_SUCCESS,
    payload: { data, preprocessed },
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_PORTFOLIO_FAILURE,
    payload: error,
  };
};

const update = (data) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to send the modifications ?")) {
    return;
  }
  dispatch(updateRequest());
  try {
    const postprocessed = postprocessData(cloneData(data));
    await postData(postprocessed);
    window.alert("Modifications successfully sent!");
    dispatch(updateSuccess(data, postprocessed));
  } catch (error) {
    window.alert("An error has occurred");
    dispatch(updateFailure(error));
  }
};

const updateRequest = () => {
  return {
    type: UPDATE_PORTFOLIO_REQUEST,
  };
};

const updateSuccess = (data, postprocessed) => {
  return {
    type: UPDATE_PORTFOLIO_SUCCESS,
    payload: { data: postprocessed, preprocessed: data },
  };
};

const updateFailure = (error) => {
  return {
    type: UPDATE_PORTFOLIO_FAILURE,
    payload: error,
  };
};

export { fetch, update };
