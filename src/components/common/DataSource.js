import { 
	GET_EMPLOYEE,
	GET_EMPLOYEE_HARDWARE,
	GET_BILLING,
	GET_HARDWARE,
	GET_SAAS,
	GET_SAAS_EMPLOYEE,
	GET_SAAP,
	GET_SAAP_EMPLOYEE,
	GET_CARD,
	GET_HARDWARES,
	GET_HARDWARES_BASIC,
	GET_SAASES_BASIC,
	GET_SAASES,
	GET_SAAPS_BASIC,
	GET_SAAPS,
	GET_EMPLOYEES,
	GET_EMPLOYEES_BASIC
} from '../Queries';

import { 
	REMOVE_EMPLOYEE_FROM_HARDWARE,
	ADD_EMPLOYEE_TO_HARDWARE,
	ADD_EMPLOYEE_TO_SAAP,
	REMOVE_EMPLOYEE_FROM_SAAP,
	UPDATE_EMPLOYEE,
	ADD_EMPLOYEE,
	UPDATE_HARDWARE,
	ADD_HARDWARE,
	UPDATE_SAAS,
	ADD_SAAS,
	UPDATE_SAAP,
	ADD_SAAP,
	ADD_EMPLOYEE_TO_SAAS,
	REMOVE_EMPLOYEE_FROM_SAAS,
} from '../Mutations';

const DataMap = {
	employee: {
		query: {
			all: GET_EMPLOYEES,
			allBasic: GET_EMPLOYEES_BASIC,
			byId: GET_EMPLOYEE,
			relatives: [GET_EMPLOYEE_HARDWARE, GET_SAAP_EMPLOYEE, GET_SAAS_EMPLOYEE]
		},
		mutate: {
			addRelative: {
				hardware: ADD_EMPLOYEE_TO_HARDWARE,
				saas: ADD_EMPLOYEE_TO_SAAS
			},
			removeRelative: {
				hardware: REMOVE_EMPLOYEE_FROM_HARDWARE,
				saas: REMOVE_EMPLOYEE_FROM_SAAS,
			},
			update: UPDATE_EMPLOYEE,
			create: ADD_EMPLOYEE
		},
		displayName: 'Employees',
		refName: 'employee',
		relativeTypes: ['saases', 'saaps', 'hardware']
	},
	hardware: {
		query: {
			all: GET_HARDWARES,
			allBasic: GET_HARDWARES_BASIC,
			byId: GET_HARDWARE,
			relatives: GET_EMPLOYEE_HARDWARE
		},
		mutate: {
			addRelative: {
				employee: ADD_EMPLOYEE_TO_HARDWARE,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_HARDWARE,
			},
			update: UPDATE_HARDWARE,
			create: ADD_HARDWARE
		},
		displayName: 'Hardware',
		refName: 'hardware',
		relativeTypes: 'employee',
	},
	saas: {
		query: {
			all: GET_SAASES,
			allBasic: GET_SAASES_BASIC,
			byId: GET_SAAS,
			relatives: GET_SAAS_EMPLOYEE
		},
		mutate: {
			addRelative: {
				employee: ADD_EMPLOYEE_TO_SAAS,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_SAAS,
			},
			update: UPDATE_SAAS,
			create: ADD_SAAS
		},
		displayName: 'Subscriptions',
		refName: 'saas',
		relativeTypes: 'employee',
	},
	saap: {
		query: {
			all: GET_SAAPS,
			allBasic: GET_SAAPS_BASIC,
			byId: GET_SAAP,
			relatives: GET_SAAP_EMPLOYEE
		},
		mutate: {
			addRelative: {
				employee: ADD_EMPLOYEE_TO_SAAP,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_SAAP,
			},
			update: UPDATE_SAAP,
			create: ADD_SAAP
		},
		displayName: 'Desktop Software',
		refName: 'saap',
		relativeTypes: 'employee',
	}
}

export default DataMap;

