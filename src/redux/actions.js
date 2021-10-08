import { cloneData, getData, preprocessData } from "../common/core/data";
import { FETCH_PORTFOLIO_REQUEST, FETCH_PORTFOLIO_SUCCESS, FETCH_PORTFOLIO_FAILURE } from "./types";

export const fetchPortfolio = () => async (dispatch) => {
  dispatch(fetchPortfolioRequest());
  try {
    const data = await getData("bendou");
    const preprocessed = preprocessData(cloneData(data));
    dispatch(fetchPortfolioSuccess(data, preprocessed));
  } catch (error) {
    dispatch(fetchPortfolioFailure(error));
  }
};

export const fetchPortfolioRequest = () => {
  return {
    type: FETCH_PORTFOLIO_REQUEST,
  };
};

export const fetchPortfolioSuccess = (data, preprocessed) => {
  return {
    type: FETCH_PORTFOLIO_SUCCESS,
    payload: { data, preprocessed },
  };
};

export const fetchPortfolioFailure = (error) => {
  return {
    type: FETCH_PORTFOLIO_FAILURE,
    payload: error,
  };
};
