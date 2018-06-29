import React from 'react';
import { graphql, compose } from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
	ADD_EMPLOYEE,
	UPDATE_EMPLOYEE
} from './index';
import { GET_EMPLOYEES } from '../Queries/ListQueries';
import DataMap from '../common/DataSource';
import {EmployeeRelationsList} from '../Controls/RelationList';

const styles = {
	drawer: {
		maxWidth: '860px',
		width: '640px',
	},
	button: {
		margin: '15px',
	},
	form: {
		minWidth: '500px',
		padding: '28px'
	}
}

class EmployeeMutationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			id: '',
			firstName: '',
			lastName: '',
			email: '',
			employee: ''
		}
		this.relationList = null;
	}
	componentDidMount() {
		if(!this.state.id) { return }
		const { id, employee } = this.state;
		this.relationList = (<EmployeeRelationsList parentId={id} dataSource={DataMap.employee}	relatives={[employee]} />)
	}
	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createEmployee({
				variables: this.state
			});
		} else {
			this.props.updateEmployee({
				variables: this.state
			});
		}
		this.props.toggleMethod(false, '', '')
	}
	render() {
		return(

				<form style={styles.form} onSubmit={this.onSubmit.bind(this)}>
					<h3>{this.props.type}</h3>									
					<TextField
						id='firstName'
						label='First Name'
						value={ this.state.firstName}
						fullWidth
						margin="normal"
						onChange={ event => this.setState({ [event.target.id]: event.target.value})}
					/>
					<TextField
						id='lastName'
						label='Last Name'
						value={ this.state.lastName}
						fullWidth
						margin="normal"
						onChange={ event => this.setState({ [event.target.id]: event.target.value})}
					/>
					<TextField
						id="email"
						label="Email"
						type="email"
						value={ this.state.email }
						fullWidth
						margin="normal"
						onChange={ event => this.setState({ [event.target.id]: event.target.value})}
					/>
					{ this.relationList }
					<Button type='submit' variant="contained" color="secondary" style={styles.button} >
						Save
					</Button>
				</form>
				
		)
	}
}
export default compose(
	graphql(UPDATE_EMPLOYEE, {
		name : 'updateEmployee',
		refetchQueries: [GET_EMPLOYEES]
  }),
	graphql(ADD_EMPLOYEE, {
		name : 'createEmployee',
		refetchQueries: [GET_EMPLOYEES]
  })
)(EmployeeMutationForm);
