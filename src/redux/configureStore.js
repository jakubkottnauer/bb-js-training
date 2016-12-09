import myReducer from './reducer';
import { combineReducers, createStore } from 'redux';

// STEP 2 - better but not quite there
// function myLogger(store) {
//   const next = store.dispatch;
//   return function myDispatch(action) {
//     console.log('dispatching...', action.type, action.payload);
//     const result = next(action);
//     console.log('dispatched', result);
//     return result;
//   }
// }

// function applyMiddleware(store, middlewares = []) {
//   middlewares.forEach(m => store.dispatch = m(store))
// }



// STEP 3 - yes!
// const myLogger = store => next => action => {
//   console.log('dispatching...', action.type, action.payload);
//   const result = next(action);
//   console.log('dispatched', result);
//   return result;
// }

// function applyMiddleware(store, middlewares = []) {
//   let { dispatch } = store;
//   middlewares.forEach(m => dispatch = m(store)(dispatch))
//   return { ...store, dispatch };
// }

export default function configureStore() {
  const reducers = combineReducers({
    myReducer
  });

  const store = createStore(reducers);

  // STEP 1 - monkey-patching ugly!
  // const next = store.dispatch;
  // store.dispatch = function myDispatch(action) {
  //   console.log('dispatching...', action.type, action.payload);
  //   const result = next(action);
  //   console.log('dispatched', result);
  //   return result;
  // }


  // STEP 2
  // applyMiddleware(store, [myLogger])

  // STEP 3
  // const improvedStore = applyMiddleware(store, [myLogger])

  // STEP 4 - use applyMiddleware from redux

  return store;
}
