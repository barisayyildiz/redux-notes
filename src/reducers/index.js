import counterReducer from './counterReducer';
import redux, { createStore, combineReducers } from 'redux'

const store = createStore(counterReducer);
export default store;
