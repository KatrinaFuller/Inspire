export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  get Template() {


    return `
          <p class="todo-card ${this.completed ? "todo-completed" : ""}" id="${this._id}">

          <input type="checkbox" id="${this._id}-checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" 
          ${this.completed ? "checked" : ""}>

           ${this.description} 
           
           <button type="button" class="btn danger little-x" onclick="app.controllers.todoController.removeTodo('${this._id}')">
            X 
          </button>
          </p>
        
    `
  }
}
