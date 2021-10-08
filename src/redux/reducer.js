import { combineReducers } from "redux";
import portfolioReducer from "./portfolio/reducers";
import authenticationReducer from "./authentication/reducers";

const reducer = combineReducers({
  portfolio: portfolioReducer,
  authentication: authenticationReducer,
});

export default reducer;
