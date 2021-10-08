import { FETCH_PORTFOLIO_REQUEST, FETCH_PORTFOLIO_SUCCESS, FETCH_PORTFOLIO_FAILURE } from "./types";

const initialState = {
  loading: true,
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
    default:
      return state;
  }
};

export default reducer;
