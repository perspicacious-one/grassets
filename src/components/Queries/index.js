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

export const GET_EMPLOYEES_BASIC_PAGE = gql`
  query allEmployees($skip: Int, $first: Int, $last: Int) { 
    allEmployees(
			skip: $skip
			first: $first
			last: $last
		) { 
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
			cost
			renewalTerm
			expiration
			adminEmail
    }
  }
`;
export const GET_SAASES_BASIC_PAGE = gql`
	query allSaases($skip: Int, $first: Int, $last: Int) { 
		allSaases(
			skip: $skip
			first: $first
			last: $last
		) { 
			id
			name
			qty
			cost
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
			cost
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
export const GET_SAAPS_BASIC_PAGE = gql`
	query allSaaPs($skip: Int, $first: Int, $last: Int) { 
		allSaaPs(
			skip: $skip
			first: $first
			last: $last
		) { 
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
			hardware {
				id
				maker
				model
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
			details
			employee {
				id
				email
				firstName
				lastName
			}
			software {
				id
				name
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
			details
			employee {
				id
				email
				firstName
				lastName
			}
			software {
				id
				name
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
export const GET_HARDWARES_BASIC_PAGE = gql`
	query allHardware($skip: Int, $first: Int, $last: Int) { 
		allHardwares(
			skip: $skip
			first: $first
			last: $last
		) { 
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

export const HARDWARE_META = gql`
	query _allHardwaresMeta {
		_allHardwaresMeta {
			count
		}
  }
`;
export const SAAS_META = gql`
	query _allSaasesMeta {
		_allSaasesMeta {
			count
		}
  }
`;
export const SAAP_META = gql`
	query _allSaaPsMeta {
		_allSaaPsMeta {
			count
		} 
  }
`;
export const EMPLOYEE_META = gql`
	query _allEmployeesMeta {
		_allEmployeesMeta {
			count
		}
  }
`;