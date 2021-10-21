import counterReducer from './counterReducer';
import todoReducer from './todoReducer'
import redux, { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
	counters:counterReducer,
	todos:todoReducer
})

const store = createStore(rootReducer);
export default store;
