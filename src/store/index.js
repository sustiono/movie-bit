import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import logger from "redux-logger/src";

const middleware = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
