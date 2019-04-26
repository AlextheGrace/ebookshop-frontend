// configureStore.js
import thunk from 'redux-thunk'
import { applyMiddleware,  compose,  createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import devTools from 'remote-redux-devtools';

const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   devTools,
//   applyMiddleware(...middleware),
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(...middleware)
  ));

export default store;


