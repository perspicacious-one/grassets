import gql from 'graphql-tag';


export const GET_EMPLOYEE = gql`
  query getEmployee($id: ID!) { 
    Employee(id: $id) { 
      id
			firstName
			lastName
			email
    }
  }
`;

export const GET_EMPLOYEE_HARDWARE = gql`
  query getEmployee($id: ID!) { 
    Employee(id: $id) { 
      id
			hardwares {
				id
				maker
				model
				hardwareType
			}
    }
  }
`;
export const GET_BILLING = gql`
  query getCard($id: ID!) { 
    Card(id: $id) { 
      id
			digits
			name
			expiration
    }
  }
`;


export const GET_HARDWARE = gql`
	query getHardware($id: ID!) { 
		Hardware(id: $id) { 
      id
			maker
			model
			hardwareType
			drivers
			employee {
				id
				email
				firstName
				lastName
			}
    }
  }
`;

export const GET_SAAS = gql`
	query getSaaS($id: ID!) { 
		SaaS(id: $id) { 
			id
			name
			qty
			cost
			renewalTerm
			expiration
			adminEmail
			adminPassword
			adminPortal
		}
	}
	`;
export const GET_SAAP = gql`
	query getSaaP($id: ID!) { 
		SaaP(id: $id) { 
			id
			name
			qty
			key
			adminEmail
			adminPassword
			adminPortal
		}
	}
	`;
export const GET_CARD = gql`
	query Card($id: ID!) { 
		Card(id: $id) { 
			id
			digits
			name
			expiration
		}
	}
	`;
