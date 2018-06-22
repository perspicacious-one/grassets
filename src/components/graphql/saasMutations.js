import gql from 'graphql-tag';


export const ADD_SAAS = gql`
	mutation createSaaS($name: String!, 
		$qty: Int, 
		$cost: Float, 
		$expiration: DateTime, 
		$renewalTerm: RenewalTerm,
		$adminAccoundId: ID) {
			createSaaS(
				name: $name,
				qty: $qty,
				cost: $cost,
				expiration: $expiration,
				renewalTerm: $renewalTerm,
				adminAccountId: $adminAccoundId) {
			
				id
				name
				cost
				expiration
				renewalTerm
		}
	}`


