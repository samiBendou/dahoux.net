import { FETCH_AUTHENTICATION_REQUEST, FETCH_AUTHENTICATION_SUCCESS, FETCH_AUTHENTICATION_FAILURE } from "./types";

const initialState = {
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHENTICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FETCH_AUTHENTICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
