export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.description = data.description
  }

  get Template() {
    return `
      <div class="card">
        <div class="card-body">
          <p class="card-text">${this.description} <button class="btn danger little-x" onclick="app.controllers.todoController.removeTodo('${this._id}')"> X </button></p>
          
        </div>

        
      </div>
    `
  }
}
