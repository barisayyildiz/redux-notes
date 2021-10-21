import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from '../TodoItem'
import { addTodo } from '../../actions/todo.actions';

function TodoContainer() {
	const todos = useSelector(state => state.todos.todos)
	const [newTodo, setNewTodo] = useState("")
	const dispatch = useDispatch()
	return (
		<div>
			{
				todos.map(todo => <TodoItem key={todo.id} todo={todo}></TodoItem>)
			}
			<input value={newTodo} onChange={({target:{value}}) => setNewTodo(value)}></input>
			<button onClick={() => {
				dispatch(addTodo(newTodo))
				setNewTodo("")
			}}>Add Todo</button>

		</div>
	)
}

export default TodoContainer
