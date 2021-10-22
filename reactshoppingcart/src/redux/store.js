// import {createStore} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension"

// import rootReducer from "./reducers/index";

// const store=createStore(rootReducer,composeWithDevTools());
// export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
