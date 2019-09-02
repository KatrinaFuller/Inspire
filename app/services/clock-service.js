import Clock from "../models/clock.js";


let _state = {
  clock: [new Clock({
    hour: '',
    minute: ''
  })]
}


export default class ClockService {
  get Clock() {
    return _state.clock
  }

  // startTime() {
  //   let today = new Date()
  //   let hour = today.getHours()
  //   let minute = today.getMinutes()
  //   let seconds = today.getSeconds()

  //   minute = (minute < 10 ? "0" : "") + minute
  //   seconds = (seconds < 10 ? "0" : "") + seconds

  //   let timeOfDay = (hour < 12) ? "AM" : "PM"
  //   hour = (hour > 12) ? hour - 12 : hour
  //   hour = (hour == 0) ? 12 : hour




  // checkTime(i) {
  //     hour = checkTime(hour)
  //     minute = checkTime(minute)
  //     seconds = checkTime(seconds)
  //   }
}
