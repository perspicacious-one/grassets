import moment from 'moment';
import {FormatDate} from './string';

export function fromNow(val) {
	try {
		let date = moment(val).fromNow();
		return date
	}
	catch(e) {
		console.log(e.message);

	}
}

const inFuture = (val) => {
	if(val > moment().format()) {
		return true;
	}
}

export function FormatDateRegex(val) {
	if(moment(val).isValid()) {
		return FormatDate(val)
	} else {
		return val
	}
}