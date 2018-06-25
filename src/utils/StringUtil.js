
export const IsDate = (val) => {
	var regDate = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d))/);
	return val.test(regDate);
}

export const IsUrl = (val) => {
	var regUrl = new RegExp(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/);
	return regUrl.test(val);
}

export const FormatCamel = (val) => {
	return val.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
}

export const FormatDate = (val) => {
	var regDate = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d))/);
	var result = val.match(regDate);
	return result[0];
}