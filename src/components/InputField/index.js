import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, incrementByAmount } from '../../actions/counter.actions'

function InputField() {
	const [input, setInput] = useState("")
	const dispatch = useDispatch()
	const handleClick = () => {
		const temp = Number(input)
		if(!Number.isNaN(temp))	dispatch(incrementByAmount(temp))
	}
	return (
		<div>
			<input type="number" value={input} onChange={({target:{value}}) => setInput(value)}></input>
			<button onClick={handleClick}>Increment</button>
		</div>
	)
}

export default InputField
