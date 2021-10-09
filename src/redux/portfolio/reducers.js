import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
  UPDATE_PORTFOLIO_REQUEST,
  UPDATE_PORTFOLIO_SUCCESS,
  UPDATE_PORTFOLIO_FAILURE,
} from "./types";

const initialState = {
  loading: true,
  submitting: false,
  data: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ...action.payload,
      };
    case FETCH_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      };
    case UPDATE_PORTFOLIO_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null,
      };
    case UPDATE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        submitting: false,
        error: null,
        ...action.payload,
      };
    case UPDATE_PORTFOLIO_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        data: {},
      };
    default:
      return state;
  }
};

export default reducer;
