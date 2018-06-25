import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { GET_EMPLOYEES_BASIC } from '../graphql/ListQueries';
import { Query } from 'react-apollo'
import Loading from '../common/Loading';


export const EmployeeDropdown = () => (

	<Query query={GET_EMPLOYEES_BASIC}>
		{({ loading, error, data }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
					<TextField select 
						id={"employeesList"} 
						label={"Employee"} 
						fullWidth 
						onChange={ event => this.setState( {[data[0]]: event.target.value} ) }
					>
					{
						data[0].map(record =>  {
							return(	<MenuItem key={record.id} value={record.id}>{[record.firstName, record.lastName].join(' ')}</MenuItem> )
						})
					}
					</TextField>
			)
			}
		}
	</Query>
)

