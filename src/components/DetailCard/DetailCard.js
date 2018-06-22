import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo'
import DetailForm from './DetailForm.js';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const GET_EMPLOYEE = gql`
  query getEmployee($id: ID!) { 
    Employee(id: $id) { 
      id
			firstName
			lastName
			email
    }
  }
`;

const styles = {
	drawer: {
		maxWidth: '860px',
		width: '640px',
	},
	closeButton: {
		margin: '15px',
	}
}

class DetailCard extends React.Component {
	constructor(props) {
		super(props)

		this.tryQuery = this.tryQuery.bind(this);
		this.id = ""
	}

	tryQuery() {
		if( !this.props.queryVariabe ){
			return
		} else {
			const id = this.props.queryVariabe;
			return(
				<Query 
				query={this.props.query}
				variables={{ id }}
				>
					{({ loading, error, data }) => {
						if (loading) return "Loading...";
						if (error) return `Error! ${error.message}`;
						if (data != null)	return( 
								<DetailForm results={data}/>
							)
						}
					}
				</Query>
			)
		}
	}
	render() {
		return(
			<Drawer anchor="right" open={this.props.active} elevation={6} style={styles.drawer}>
				<div
					tabIndex={0}
				>
				  <Button size="small" variant="fab" color="primary" aria-label="add" onClick={ () => this.props.toggleMethod(false, "")} style={styles.closeButton}>
						<CloseIcon />
					</Button>
				</div>
				<Divider />
				{
					this.tryQuery()
				}
				
			</Drawer>
		)
	}
}

export default DetailCard