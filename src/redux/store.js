import redux, { createStore } from 'redux'

function reducer(counter=0, action){
	switch(action.type){
		case "INCREMENT":
			return counter+1
		case "DECREMENT":
			return counter-1
		case "INCREMENT/AMOUNT":
			return counter + action.payload
		default:
			return counter
	}
}

const store = createStore(reducer);
// store.subscribe(() => console.log(store))
export default store;



