import gql from 'graphql-tag';

export const GET_HARDWARE = gql`
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

export const GET_SAASES = gql`
  query allSaases { 
    allSaases { 
      id
			name
			qty
			renewalTerm
			expiration
			adminAccount {
				id
				email
			}
    }
  }
`;