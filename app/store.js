import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
// import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

export default store;
