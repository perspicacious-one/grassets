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
export const DELETE_SAAP = gql`
	mutation deleteSaaP($id: ID!) {
		deleteSaaP(id: $id) {
			id
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
export const DELETE_SAAS = gql`
	mutation deleteSaaS($id: ID!) {
		deleteSaaS(id: $id) {
			id
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
	mutation createEmployee($drivers: String,$hardwareType: HardwareType,$maker: String,$model: String) {
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

export const DELETE_HARDWARE = gql`
	mutation deleteHardware($id: ID!) {
		deleteHardware(id: $id) {
			id
		}
}`

export const ADD_EMPLOYEE = gql`
	mutation createEmployee($firstName: String,$lastName: String,$email: String) {
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
export const DELETE_EMPLOYEE = gql`
	mutation deleteEmployee($id: ID!) {
		deleteEmployee(id: $id) {
			id
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
	mutation addToEmployeeSaasApps($parentId: ID!,$childId: ID!) {
		addToEmployeeSaasApps(subscriptionSaaSId: $parentId, userEmployeeId: $childId) {
			userEmployee {
			id
			firstName
			lastName
		}
		subscriptionSaaS {
			id
			name
		}
	} 
}`
export const REMOVE_EMPLOYEE_FROM_SAAS = gql`
	mutation removeFromEmployeeSaasApps($parentId: ID!,$childId: ID!) {
		removeFromEmployeeSaasApps(subscriptionSaaSId: $parentId, userEmployeeId: $childId) {
			userEmployee {
			id
			firstName
			lastName
		}
		subscriptionSaaS {
			id
			name
		}
	} 
}`
export const ADD_EMPLOYEE_TO_SAAP = gql`
	mutation addToSoftware($parentId: ID!,$childId: ID!) {
		addToSoftware(saapSaaPId: $parentId, userEmployeeId: $childId) {
			userEmployee {
			id
			firstName
			lastName
		}
		saapSaaP {
			id
			name
		}
	} 
}`
export const REMOVE_EMPLOYEE_FROM_SAAP = gql`
	mutation removeFromSoftware($parentId: ID!,$childId: ID!) {
		removeFromSoftware(saapSaaPId: $parentId, userEmployeeId: $childId) {
			userEmployee {
			id
			firstName
			lastName
		}
		saapSaaP {
			id
			name
		}
	} 
}`

export const ADD_SAAP_TO_HARDWARE = gql`
	mutation addToSoftware($parentId: ID!,$childId: ID!) {
		AddToClientSoftware(saaPsSaaPId: $parentId, hardwaresHardwareId: $childId) {
		hardwaresHardware {
			id
			maker
			model
		}
		saaPsSaaP {
			id
			name
		}
	} 
}`
export const REMOVE_SAAP_FROM_HARDWARE = gql`
	mutation removeFromSoftware($parentId: ID!,$childId: ID!) {
		RemoveFromClientSoftware(saaPsSaaPId: $parentId, hardwaresHardwareId: $childId) {
		hardwaresHardware {
			id
			firstName
			lastName
		}
		saaPsSaaP {
			id
			name
		}
	} 
}`