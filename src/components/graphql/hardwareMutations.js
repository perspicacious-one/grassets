import gql from 'graphql-tag';


export const AddHardware = () => gql`
	mutation addHardware($drivers: String,$hardwareType: HardwareType,$maker: String,$model: String) {
		createHardware(maker: $maker,model: $model,drivers: $drivers,hardwareType: $hardwareType) {
			id
			manufacturer
			model
			drivers
			hardwareType
		}
}`

export const UpdateHardware = () => gql`
	mutation updateHardware($id: ID!, $drivers: String, $hardwareType: HardwareType, $maker: String, $model: String, $employeeId: ID) {
		updateHardware(id: $id, maker: $maker,model: $model,drivers: $drivers,hardwareType: $hardwareType, employeeId: $employeeId) {
			id
			manufacturer
			model
			drivers
			hardwareType
			employee
		}
}`
