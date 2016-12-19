import createLogger from 'redux-logger';
import myReducer from './reducer';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

export default function configureStore() {
  const reducers = combineReducers({
    myReducer
  });

  const middlewares = [
    thunk,
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    }),
    createLogger({
      collapsed: true
    })
  ];

  const store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
}
