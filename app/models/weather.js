export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.kelvin = data.main.temp
    this.converted = ((this.kelvin - 273.15) * 1.8) + 32
    this.temp = Math.round(this.converted * 10) / 10
    this.city = data.name
  }

  get Template() {
    return `

            <h5>${this.temp} °F</h5>
            <p>${this.city}</p>

    `
  }
}