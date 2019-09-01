
export default class Image {
  constructor(data) {
    this.image = data.url || data.large_url
  }

  get Template() {
    return this.image
  }
}