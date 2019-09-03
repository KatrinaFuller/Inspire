import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let elem = document.getElementById('todos')
	let todos = _todoService.Todos
	// console.log(todos)
	if (todos.length === 0) {
		// todo list is empty
		elem.innerHTML = "<p>No Todos</p>"
	} else {
		// Count the number of todos that have completed set to false
		let template = '<ul>'
		let remainingTodos = 0; // count here
		todos.forEach(t => {
			template += t.Template
			if (t.completed === false) {
				remainingTodos++;
			}
		})
		let count = `<h6 class="todo-header">${remainingTodos} Todo</h6>`
		elem.innerHTML = count + template + '</ul>'
	}

}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('todos', _drawTodos)
		// _todoService.getTodos()

		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			//TODO build the todo object from the data that comes into this method
			description: form.description.value
		}
		_todoService.addTodo(todo)

		form.reset()
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId);
		_drawTodos();
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}

	showTodos() {
		_todoService.showTodos()
	}

}
