import gql from 'graphql-tag';

export const ADD_SAAP = gql`
	mutation createSaaP($name: String!,$qty: Int,$key: String,$maintenance: Boolean,$adminAccoundId: ID) {
		createSaaP(name: $name,qty: $qty,key: $key,maintenance: $maintenance,adminAccountId: $adminAccoundId) {
			id
			name
			qty
			key
			maintenance
		}
	}`
export const UPDATE_SAAP = gql`
	mutation updateSaaP($id: ID!,$name: String!,$qty: Int,$key: String,$maintenance: Boolean,$adminAccoundId: ID) {
		updateSaaP(id: $id, name: $name,qty: $qty,key: $key,maintenance: $maintenance,adminAccountId: $adminAccoundId) {
			id
			name
			qty
			key
			maintenance
		}
	}`

export const ADD_SAAS = gql`
	mutation createSaaS($name: String!,$qty: Int,$cost: Int,$expiration: DateTime,$renewalTerm: RenewalTerm,$adminAccoundId: ID) {
		createSaaS(name: $name,qty: $qty,cost: $cost,expiration: $expiration,renewalTerm: $renewalTerm,adminAccountId: $adminAccoundId) {
			id
			name
			cost
			qty
			expiration
			renewalTerm
		}
	}`
export const UPDATE_SAAS = gql`
	mutation updateSaaS($id: ID!,$name: String!,$qty: Int,$cost: Int,$expiration: DateTime,$renewalTerm: RenewalTerm,$adminAccoundId: ID) {
		updateSaaS(id: $id,name: $name,qty: $qty,cost: $cost,expiration: $expiration,renewalTerm: $renewalTerm,adminAccountId: $adminAccoundId) {
			id
			name
			cost
			qty
			expiration
			renewalTerm
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

