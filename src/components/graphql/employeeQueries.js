import gql from 'graphql-tag';


export const GET_EMPLOYEE = () => gql`
  query getEmployee($id: ID!) { 
    Employee(id: $id) { 
      id
			firstName
			lastName
			email
    }
  }
`;