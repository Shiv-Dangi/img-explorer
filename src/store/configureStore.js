import {createStore, applyMiddleware} from 'redux';
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// const store = function configureStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk,reduxImmutableStateInvariant(), routerMiddleware(browserHistory))
//   );
// };
const initialState = {};
const store = createStore(rootReducer, initialState,
  applyMiddleware(thunk,reduxImmutableStateInvariant(), routerMiddleware(browserHistory))
);

const history = syncHistoryWithStore(browserHistory, store);

export { store, history };
