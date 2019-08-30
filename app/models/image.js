
export default class Image {
  constructor(data) {
    this.image = data.url
  }

  get Template() {
    return this.image
  }
}