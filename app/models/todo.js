export default class Todo {
  constructor(data) {
    this.description = data.description
  }

  get Template() {
    return `
      <div class="card">
        <div class="card-body">
          <p class="card-text">${this.description}</p>
        </div>
        <button class="btn btn-success" onclick="app.controllers.todoController.addTodo()">Add Todo</button>
      </div>
    `
  }
}
