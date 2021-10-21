import React from 'react'
import { useDispatch } from 'react-redux'; 
import { removeTodo } from '../../actions/todo.actions'

function TodoItem({todo:{id,task}}) {
	const dispatch = useDispatch()
	return (
		<div style={{margin:'20px'}}>
			<span key={id} style={{margin:'20px'}} >{task}</span>
			<button onClick={() => dispatch(removeTodo(id))}>Remove</button>
		</div>
	)
}

export default TodoItem
