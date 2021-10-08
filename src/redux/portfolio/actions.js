import { cloneData, getData, preprocessData } from "../../common/core/data";
import { FETCH_PORTFOLIO_REQUEST, FETCH_PORTFOLIO_SUCCESS, FETCH_PORTFOLIO_FAILURE } from "./types";

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

export default fetch;
