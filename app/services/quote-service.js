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

}
