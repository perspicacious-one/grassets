import gql from 'graphql-tag';

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

export const GET_SAAS = () => gql`
  query getSaas($id: ID!) { 
    Saas(id: $id) { 
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
// class Query extends React.Component {
// 	constructor(props) {
// 		super(props)

// 		this.props.variable
// 	}
// 	render() {
// 		return(
// 			<Query 
// 				query={this.props.query}
// 				variables={{ id }}
// 				>
// 					{({ loading, error, data }) => {
// 						if (loading) return "Loading...";
// 						if (error) return `Error! ${error.message}`;
// 						if (data != null)	return( 
// 								{this.props.children}
// 							)
// 						}
// 					}
// 			</Query>
// 		)
// 	}
// }
