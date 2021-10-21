
export function addTodo(task){
	return {
		type : "TODO/ADD",
		payload : task
	}
}

export function removeTodo(id){
	return {
		type : "TODO/REMOVE",
		payload : id
	}
}


