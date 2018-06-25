import gql from 'graphql-tag';

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
			}
    }
  }
`;
export const GET_SAASES_BASIC = gql`
  query allSaases { 
    allSaases { 
      id
			name
			qty
			renewalTerm
			expiration
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
    }
  }
`;
export const GET_SAAPS_BASIC = gql`
  query allSaaPs { 
    allSaaPs { 
      id
			name
			qty
			maintenance
			key
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
    }
  }
`;

export const GET_EMPLOYEES = gql`
  query allEmployees { 
    allEmployees { 
      id
			firstName
			lastName
			email
			saasApps {
				id
				name
			}
			hardware {
				id
				maker
				model
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
