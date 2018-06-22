import gql from 'graphql-tag';


export const GET_BILLING = () => gql`
  query getCard($id: ID!) { 
    Card(id: $id) { 
      id
			digits
			name
			expiration
    }
  }
`;
