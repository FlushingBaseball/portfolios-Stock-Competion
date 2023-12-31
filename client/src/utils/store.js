import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import * as actionCreators from '../actions/auth/authActions';

const initalState ={};

const middleware =[thunk];
const composeEnhancer = composeWithDevTools({actionCreators, trace: true, traceLimit: 25  });

const store = createStore(
  rootReducer,
  initalState,
  composeEnhancer(
    applyMiddleware(...middleware)
  )
);

export default store;

