import React from 'react';
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
	REMOVE_SAAP_FROM_HARDWARE,
	ADD_SAAP_TO_HARDWARE,
	UPDATE_EMPLOYEE,
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	UPDATE_HARDWARE,
	ADD_HARDWARE,
	DELETE_HARDWARE,
	UPDATE_SAAS,
	ADD_SAAS,
	DELETE_SAAS,
	UPDATE_SAAP,
	ADD_SAAP,
	DELETE_SAAP,
	ADD_EMPLOYEE_TO_SAAS,
	REMOVE_EMPLOYEE_FROM_SAAS,
} from '../Mutations';
import HardwareFields from '../Forms/HardwareFields';
import SoftwareFields from '../Forms/SoftwareFields';
import SubscriptionFields from '../Forms/SubscriptionFields';
import EmployeeFields from '../Forms/EmployeeFields';



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
				hardwares: ADD_EMPLOYEE_TO_HARDWARE,
				subscription: ADD_EMPLOYEE_TO_SAAS,
				saap: ADD_EMPLOYEE_TO_SAAP
			},
			removeRelative: {
				hardwares: REMOVE_EMPLOYEE_FROM_HARDWARE,
				subscription: REMOVE_EMPLOYEE_FROM_SAAS,
				saap: REMOVE_EMPLOYEE_FROM_SAAP
			},
			update: UPDATE_EMPLOYEE,
			create: ADD_EMPLOYEE,
			delete: DELETE_EMPLOYEE,
		},
		fields: (<EmployeeFields />),
		displayName: 'Employees',
		refName: 'employee',
		relativeTypes: ['subscription', 'saap', 'hardwares']
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
				software: ADD_SAAP_TO_HARDWARE,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_HARDWARE,
				software: REMOVE_SAAP_FROM_HARDWARE,
			},
			update: UPDATE_HARDWARE,
			create: ADD_HARDWARE,
			delete: DELETE_HARDWARE,
		},
		fields: (<HardwareFields />),
		displayName: 'Hardware',
		refName: 'hardware',
		relativeTypes: ['employee', 'software'],
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
				user: ADD_EMPLOYEE_TO_SAAS,
			},
			removeRelative: {
				user: REMOVE_EMPLOYEE_FROM_SAAS,
			},
			update: UPDATE_SAAS,
			create: ADD_SAAS,
			delete: DELETE_SAAS,
		},
		fields: (<SubscriptionFields />),
		displayName: 'Subscriptions',
		refName: 'saas',
		relativeTypes: 'user',
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
				user: ADD_EMPLOYEE_TO_SAAP,
				hardware: ADD_SAAP_TO_HARDWARE
			},
			removeRelative: {
				user: REMOVE_EMPLOYEE_FROM_SAAP,
				hardware: REMOVE_SAAP_FROM_HARDWARE,
			},
			update: UPDATE_SAAP,
			create: ADD_SAAP,
			delete: DELETE_SAAP
		},
		fields: (<SoftwareFields />),
		displayName: 'Desktop Software',
		refName: 'saap',
		relativeTypes: ['user', 'hardware']
	},
	software: {
		query: {
			all: GET_SAAPS,
			allBasic: GET_SAAPS_BASIC,
			byId: GET_SAAP,
			relatives: GET_SAAP_EMPLOYEE
		},
		mutate: {
			addRelative: {
				user: ADD_EMPLOYEE_TO_SAAP,
				hardware: ADD_SAAP_TO_HARDWARE
			},
			removeRelative: {
				user: REMOVE_EMPLOYEE_FROM_SAAP,
				hardware: REMOVE_SAAP_FROM_HARDWARE,
			},
			update: UPDATE_SAAP,
			create: ADD_SAAP,
			delete: DELETE_SAAP
		},
		fields: (<SoftwareFields />),
		displayName: 'Desktop Software',
		refName: 'saap',
		relativeTypes: ['user', 'hardware']
	}
}


export default DataMap;
