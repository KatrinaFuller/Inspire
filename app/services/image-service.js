import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	get Image() {
		return _state.image
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		console.log("Trying to get Image")
		imgApi.get().then(res => {
			_setState('image', new Image(res.data))
		})
	}
}
