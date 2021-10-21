import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions/counter.actions';

function Counter() {
	const counter = useSelector(state => state)
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	)
}

export default Counter
