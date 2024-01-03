import { legacy_createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./reducers";
const middleware = [thunk];

const store = legacy_createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(...middleware))
    )
);

export default store;