import ImageService from "../services/image-service.js";

const _is = new ImageService()

function _drawImage() {
  document.getElementById('bg-image').style.backgroundImage = `url('${_is.Image.Template}')`

}


//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)
    _is.getImage()
  }

}

