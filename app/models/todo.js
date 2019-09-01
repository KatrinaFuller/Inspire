export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  get Template() {
    return `
        
          <p class="todo-card" id="${this._id}"><input type="checkbox"> ${this.description} <button type="button" class="btn danger little-x" onclick="app.controllers.todoController.removeTodo('${this._id}')"> X </button></p>
        
    `
  }
}
