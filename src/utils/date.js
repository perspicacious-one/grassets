import moment from 'moment';

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

export function FormatDate(val) {
	return moment(val, 'YYYY-MM-DD')
}