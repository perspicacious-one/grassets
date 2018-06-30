import React from 'react';
import { graphql, compose } from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
	ADD_EMPLOYEE,
	UPDATE_EMPLOYEE
} from '../Mutations';

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

class DetailForm extends React.Component {
	constructor(props) {
		super(props)


		this.labels = Object.keys(this.props.data);
		this.values = Object.values(this.props.data);

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

				<form noValidate style={styles.form} onSubmit={this.onSubmit.bind(this)}>
					<h3>{this.props.type}</h3>
					{
						this.labels.map( label => {
							if( !["__typename", "id"].includes(label) ) {
								return(
								<div key={label}>
									<TextField
										id={label}
										label={label}
										value={ this.props.data[label] || ''}
										fullWidth
										margin="normal"
										onChange={ event => this.setState({ [event.target.id]: event.target.value})}
									/>
								</div>
							)
							}
						})
					}
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
		refetchQueries: [{query: DataMap.employee.query.allBasic}]
  }),
	graphql(ADD_EMPLOYEE, {
		name : 'createEmployee',
		refetchQueries: [{query: DataMap.employee.query.allBasic}]
  })
)(DetailForm);
