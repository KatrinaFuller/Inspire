import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {}
}

let _subscribers = {
	quotes: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	get Quote() {
		return _state.quotes
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote() {
		console.log('Getting a quote')
		_quoteApi.get().then(res => {
			_setState('quotes', new Quote(res.data))
		})
	}
}
