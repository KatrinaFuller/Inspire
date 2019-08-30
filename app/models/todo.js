export default class Todo {
  constructor(data) {
    this.description = data.description
  }

  get Template() {
    return `
    <form onsubmit="app.controllers.todoController"></form>
    `
  }
}
