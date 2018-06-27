import gql from 'graphql-tag';

export const ADD_SAAP = gql`
	mutation createSaaP($name: String!,$qty: Int,$key: String,$maintenance: Boolean,$adminEmail: String,$adminPassword: String,$adminPortal: String) {
		createSaaP(name: $name,qty: $qty,key: $key,maintenance: $maintenance,adminEmail: $adminEmail,adminPassword: $adminPassword,adminPortal: $adminPortal) {
			id
			name
			qty
			key
			maintenance
			adminEmail
			adminPassword
			adminPortal
		}
	}`
export const UPDATE_SAAP = gql`
	mutation updateSaaP($id: ID!,$name: String!,$qty: Int,$key: String,$maintenance: Boolean,$adminEmail: String,$adminPassword: String,$adminPortal: String) {
		updateSaaP(id: $id, name: $name,qty: $qty,key: $key,maintenance: $maintenance,adminEmail: $adminEmail,adminPassword: $adminPassword,adminPortal: $adminPortal) {
			id
			name
			qty
			key
			maintenance
			adminEmail
			adminPassword
			adminPortal
		}
	}`

export const ADD_SAAS = gql`
	mutation createSaaS($name: String!,$qty: Int,$cost: Int,$expiration: DateTime,$renewalTerm: RenewalTerm,$adminEmail: String,$adminPassword: String,$adminPortal: String) {
		createSaaS(name: $name,qty: $qty,cost: $cost,expiration: $expiration,renewalTerm: $renewalTerm,adminEmail: $adminEmail,adminPassword: $adminPassword,adminPortal: $adminPortal) {
			id
			name
			cost
			qty
			expiration
			renewalTerm
			adminEmail
			adminPassword
			adminPortal
		}
	}`
export const UPDATE_SAAS = gql`
	mutation updateSaaS($id: ID!,$name: String!,$qty: Int,$cost: Int,$expiration: DateTime,$renewalTerm: RenewalTerm,$adminEmail: String,$adminPassword: String,$adminPortal: String) {
		updateSaaS(id: $id,name: $name,qty: $qty,cost: $cost,expiration: $expiration,renewalTerm: $renewalTerm,adminEmail: $adminEmail,adminPassword: $adminPassword,adminPortal: $adminPortal) {
			id
			name
			cost
			qty
			expiration
			renewalTerm
			adminEmail
			adminPassword
			adminPortal
		}
	}`

export const ADD_HARDWARE = gql`
	mutation addHardware($drivers: String,$hardwareType: HardwareType,$maker: String,$model: String) {
		createHardware(maker: $maker,model: $model,drivers: $drivers,hardwareType: $hardwareType) {
			id
			maker
			model
			drivers
			hardwareType
		}
}`

export const UPDATE_HARDWARE = gql`
	mutation updateHardware($id: ID!, $drivers: String, $hardwareType: HardwareType, $maker: String, $model: String, $employeeId: ID) {
		updateHardware(id: $id, maker: $maker,model: $model,drivers: $drivers,hardwareType: $hardwareType, employeeId: $employeeId) {
			id
			maker
			model
			drivers
			hardwareType
		}
}`

export const ADD_EMPLOYEE = gql`
	mutation addEmployee($firstName: String,$lastName: String,$email: String) {
		createEmployee(firstName: $firstName,lastName: $lastName,email: $email) {
			id
			firstName
			lastName
			email
		}
}`

export const UPDATE_EMPLOYEE = gql`
	mutation updateEmployee($id: ID!, $firstName: String,$lastName: String,$email: String) {
		updateEmployee(id: $id, firstName: $firstName,lastName: $lastName,email: $email) {
			id
			firstName
			lastName
			email
		}
}`

export const ADD_EMPLOYEE_TO_HARDWARE = gql`
	mutation addToEmployeeHardware($parentId: ID!,$childId: ID!) {
		addToEmployeeHardware(hardwaresHardwareId: $parentId, employeeEmployeeId: $childId) {
		employeeEmployee {
			id
			firstName
			lastName
		}
		hardwaresHardware {
			id
			maker
			model
		}
	} 
}`
export const REMOVE_EMPLOYEE_FROM_HARDWARE = gql`
	mutation removeFromEmployeeHardware($parentId: ID!,$childId: ID!) {
		removeFromEmployeeHardware(hardwaresHardwareId: $parentId, employeeEmployeeId: $childId) {
		employeeEmployee {
			id
			firstName
			lastName
		}
		hardwaresHardware {
			id
			maker
			model
		}
	} 
}`
export const ADD_EMPLOYEE_TO_SAAS = gql`
	mutation addToEmployeeSaas($parentId: ID!,$childId: ID!) {
		addToEmployeeSaas(saasSaasId: $parentId, employeeEmployeeId: $childId) {
		employeeEmployee {
			id
			firstName
			lastName
		}
		saasSaas {
			id
			name
		}
	} 
}`
export const REMOVE_EMPLOYEE_FROM_SAAS = gql`
	mutation removeFromEmployeeSaas($parentId: ID!,$childId: ID!) {
		removeFromEmployeeSaas(saasSaasId: $parentId, employeeEmployeeId: $childId) {
		employeeEmployee {
			id
			firstName
			lastName
		}
		saasSaas {
			id
			name
		}
	} 
}`
export const ADD_EMPLOYEE_TO_SAAP = gql`
	mutation addToEmployeeSaap($parentId: ID!,$childId: ID!) {
		addToEmployeeSaap(saapSaapId: $parentId, employeeEmployeeId: $childId) {
		employeeEmployee {
			id
			firstName
			lastName
		}
		saapSaap {
			id
			name
		}
	} 
}`
export const REMOVE_EMPLOYEE_FROM_SAAP = gql`
	mutation removeFromEmployeeSaap($parentId: ID!,$childId: ID!) {
		removeFromEmployeeSaap(saapSaapId: $parentId, employeeEmployeeId: $childId) {
		employeeEmployee {
			id
			firstName
			lastName
		}
		saapSaap {
			id
			name
		}
	} 
}`