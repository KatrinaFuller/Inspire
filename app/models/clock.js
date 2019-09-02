
export default class Clock {
  constructor(data) {
    this.hour = data.hour
    this.minute = data.minute
    this.seconds = data.seconds
  }

  get Template() {
    return `${this.hour} : ${this.minute}`
  }
}