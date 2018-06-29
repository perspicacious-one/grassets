import DataMap from '../components/common/DataSource'


//Apollo graphql data operations
export function getRootKey(data) {
	if(!data) {return null;}
	var root = Object.keys(data).shift().toString();
	if(data[root] !== undefined) {
		return root;
	} else {
		return null;
	}
}
export function getPairs(data) {
	if(!data) {return null;}
	let rootName = getRootKey(data);
	if(data[rootName] !== undefined) {
		return Object.entries(data[rootName])
	}
}
export function getRelationKey(data) {
	let result = null
	if(!data) {return null;}
	let splitData = Object.entries(data) 
	splitData.map(entry => {
		if(typeof entry[1] === 'object' ) {
			if(Object.keys(entry[1]).includes('id')) {
				result = entry[0];
			}
		}
	})
	return result
}
export function getRelationData(data) {
	let result = null
	if(!data) {return null;}
	let splitData = Object.entries(data) 
	splitData.map(entry => {
		if(typeof entry[1] === 'object' ) {
			if(Object.keys(entry[1]).includes('id')) {
				result = entry[1];
			}
		}

	})
	return result
}
//Project specific operations
export const GetDisplayName = (val) => {
	var keys = Object.keys(val)
	switch (true) {
		case(keys.includes('firstName')):
			return(val.firstName + ' ' + val.lastName);
		case(keys.includes('model')):
			return(val.maker + ' ' + val.model);
		default:
			return(val.name);
	}
}

export function normalizeResult(data) {
	!data ? null : Object.values(data)[0]
}