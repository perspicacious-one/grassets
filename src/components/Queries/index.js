import gql from 'graphql-tag';

// Employee Queries
export const GET_EMPLOYEES = gql`
  query allEmployees { 
    allEmployees { 
      id
			firstName
			lastName
			email
			subscription {
				id
				name
			}
			hardwares {
				id
				maker
				model
			}
			saap {
				id
				name
			}
    }
  }
`;

export const GET_EMPLOYEES_BASIC = gql`
  query allEmployees { 
    allEmployees { 
      id
			firstName
			lastName
			email
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query getEmployee($id: ID!) { 
    Employee(id: $id) { 
      id
			firstName
			lastName
			email
			hardwares {
				id
				maker
				model
			}
			subscription {
				id
				name
			}
			saap {
				id
				name
			}
    }
  }
`;

//Relation Queries
export const GET_EMPLOYEE_HARDWARE = gql`
  query getEmployee($id: ID!) { 
    Employee(id: $id) { 
			id
			firstName
			lastName
			hardwares {
				id
				maker
				model
				hardwareType
			}
    }
  }
`;
export const GET_SAAP_EMPLOYEE = gql`
  query getSaap($id: ID!) { 
    getSaap(id: $id) { 
			id
			name
			user {
				id
				firstName
				lastName
				email
			}
    }
  }
`;
export const GET_SAAS_EMPLOYEE = gql`
  query getSaaS($id: ID!) { 
    getSaaS(id: $id) { 
			id
			name
			user {
				id
				firstName
				lastName
				email
			}
    }
  }
`;

//Subscription Queries
export const GET_SAASES_BASIC = gql`
  query allSaases { 
    allSaases { 
      id
			name
			qty
			renewalTerm
			expiration
			adminEmail
    }
  }
`;
export const GET_SAASES = gql`
  query allSaases { 
    allSaases { 
      id
			name
			qty
			renewalTerm
			expiration
			adminEmail
			adminPassword
			adminPortal
			user {
				id
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
			user {
				id
				email
				firstName
				lastName
			}
		}
	}
	`;
	//Software Product Queries
	export const GET_SAAPS_BASIC = gql`
  query allSaaPs { 
    allSaaPs { 
      id
			name
			qty
			maintenance
			key
			adminEmail
    }
  }
`;
export const GET_SAAPS = gql`
  query allSaaPs { 
    allSaaPs { 
      id
			name
			qty
			maintenance
			key
			adminEmail
			adminPassword
			adminPortal
			user {
				id
				firstName
				lastName
			}
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
			user {
				id
				email
				firstName
				lastName
			}
		}
	}
	`;

	//Hardware Queries
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

export const GET_HARDWARES = gql`
  query allHardware { 
    allHardwares { 
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
export const GET_HARDWARES_BASIC = gql`
	query allHardware { 
		allHardwares { 
			id
			maker
			model
			hardwareType
			drivers
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
