const initalState = {
	todos : [
		{
			id : 0,
			task : "lorem ipsum dolor sit amet"
		},
		{
			id : 1,
			task : "hellloooooooooo world!!!!"
		}
	]
}

const nextTodoId = (todos) => todos.length

function todoReducer(state=initalState, action){
	switch(action.type){
		case "TODO/ADD":
			return{
				...state,
				todos:[
					...state.todos,
					{
						id : state.todos.length,
						task : action.payload
					}
				]
			}
		case "TODO/REMOVE":
			return{
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			}
		default:
			return state
	}

}

export default todoReducer
