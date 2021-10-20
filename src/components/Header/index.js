import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
	const store = useSelector(state => state)
	return (
		<>
			<h1>{store}</h1>
		</>
	)
}

export default Header
