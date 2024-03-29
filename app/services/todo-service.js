import Todo from "../models/todo.js";

//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/katrina/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get Todos() {
		return _state.todos.map(t => new Todo(t))
	}

	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				let todoData = res.data.data.map(t => new Todo(t))
				_setState('todos', todoData)
				console.log("MADE IT HERE")
				console.log(res.data.data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				_state.todos.push(new Todo(res.data.data))
				_setState('todos', _state.todos)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		todo.completed = !todo.completed


		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
				_setState('todos', _state.todos)
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
		// console.log("MADE IT HERE")
		let todo = _state.todos.find(todo => todo._id == todoId)
		todoApi.delete(todoId, todo)
			.then(res => {
				let todoIndex = _state.todos.findIndex(todo => todo._id == todoId)
				_state.todos.splice(todoIndex, 1)
				_setState('todos', _state.todos)
			})
			.catch(err => {
				// debugger;
				console.error(err)
			})
	}

	showTodos() {
		let show = document.getElementById('show-todos')
		if (show.style.display === "none" || show.style.display === "") {
			show.style.display = "block"
		} else if (show.style.display === "block") {
			show.style.display = "none"
		}
	}

}
