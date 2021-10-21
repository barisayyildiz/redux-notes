import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
	const counter = useSelector(state => state.counters.counter)
	return (
		<>
			<h1>{counter}</h1>
		</>
	)
}

export default Header
