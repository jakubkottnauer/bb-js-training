import myReducer from './reducer';
import { combineReducers, createStore } from 'redux';

export default function configureStore() {
  const reducers = combineReducers({
    myReducer
  });

  const store = createStore(reducers);
  console.log(store)
  return store;
}
