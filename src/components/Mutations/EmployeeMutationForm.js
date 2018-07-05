import React from 'react';
import { graphql, compose } from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
	ADD_EMPLOYEE,
	UPDATE_EMPLOYEE
} from './index';
import DataMap from '../common/Mapping';
import Chip from '@material-ui/core/Chip';
import { GetDisplayName } from '../../utils/string';
import Grid from '@material-ui/core/Grid';
import DeleteButton from '../Controls/DeleteButton';
import SaveIcon from '@material-ui/icons/Save';

const styles = {
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		flexGrow: 1,
		maxWidth: '100%'
  },
	button: {
		marginTop: '15px',
		bottom: '15px',
	},
	formActions: {
		marginTop: '20px'
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
		}
	}
	componentDidMount() {
		if(!this.props.data) { return };
		Object.keys(this.props.data).map(key => {
			this.setState({
				[key]: this.props.data[key]
			})
		})

	}
	handleLinkChange(data, event) {	
		this.props.handleLinkChange
		if(data){
			this.setState({
				employee: data.employee
			})
		}
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
		this.props.refresh()
		this.props.toggleMethod(false, '', '')
	}

	renderChips() {
		if(!this.props.data) { return };
		const activeRelatives = [this.state.subscription, this.state.hardwares, this.state.saap];
		if(activeRelatives != undefined) {
			return activeRelatives.map(chips => {
				if(chips != undefined) {
					return chips.map(chip => 
						typeof chip === 'object' && (<Chip id={chip.id} label={GetDisplayName(chip)} />)
					)
				}
			})
		}

	}
	render() {
		return(
				<form onSubmit={this.onSubmit.bind(this)}>
					<Grid container spacing={24} style={styles.root}>
						<Grid item xs={12}>
						<h3>{this.props.type}</h3>	
						</Grid>	
						<Grid item xs={12}>								
							<TextField
								id='firstName'
								label='First Name'
								value={ this.state.firstName}
								fullWidth
								margin="normal"
								onChange={ event => this.setState({ [event.target.id]: event.target.value})}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id='lastName'
								label='Last Name'
								value={ this.state.lastName}
								fullWidth
								margin="normal"
								onChange={ event => this.setState({ [event.target.id]: event.target.value})}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="email"
								label="Email"
								type="email"
								value={ this.state.email }
								fullWidth
								margin="normal"
								onChange={ event => this.setState({ [event.target.id]: event.target.value})}
							/>
						</Grid>
						<Grid item xs={12}>
							{ this.renderChips() }
						</Grid>
					</Grid>
					<Grid container spacing={24} style={styles.formActions}>
							<Grid item xs={6}>
								<Button type='submit' color="primary" variant="fab" style={styles.button} >
									<SaveIcon />
								</Button>
							</Grid>
							<Grid item xs={6}>
									<DeleteButton id={this.state.id} />
							</Grid>
						</Grid>
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
)(EmployeeMutationForm);
