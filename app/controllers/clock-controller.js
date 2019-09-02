import ClockService from "../services/clock-service.js";


let _clockService = new ClockService()

function _drawClock() {
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  let clock = document.getElementById('clock')

  let meridiem = "AM"
  if (hours > 11) {
    meridiem = "PM"
  }
  if (hours > 12) {
    hours = hours - 12
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  clock.innerText = hours + ":" + minutes + ":" + seconds + "" + meridiem
  setTimeout(_drawClock, 1000)
}

export default class ClockController {
  constructor() {
    _drawClock()
  }
}