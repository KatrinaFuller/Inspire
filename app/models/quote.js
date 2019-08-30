export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return `
      <div class="card" id="card">
         <div class="card-body">
            <h5 class="card-title">${this.quote}</h5>
            <p class="card-text">${this.author}</p>
        </div>
      </div>
    `
  }
}