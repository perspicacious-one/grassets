import { compose, graphql } from 'react-apollo'
import {
	ADD_SAAP,
	UPDATE_SAAP
} from './Mutations';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { GET_SAAPS } from '../graphql/ListQueries';

const styles = {
	root: {
		flexGrow: 1,
		maxWidth: '800px'
  },
	button: {
		margin: '15px',
	},
	form: {
		minWidth: '600px',
		padding: '28px'
	}
}


class SaapMutationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			id: '',
			name: '',
			qty: 0,
			maintenance: '',
			key: '',
			adminEmail: '',
			adminPassword: '',
			adminPortal: '',
		}
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		if(!this.props.data) { return };
		let { id, name, qty, maintenance, key, adminEmail, adminPassword, adminPortal } = this.props.data;
		this.setState({
			id: id,
			name: name,
			qty: qty,
			maintenance: maintenance,
			key: key,
			adminEmail: adminEmail,
			adminPassword: adminPassword,
			adminPortal: adminPortal,
		})
	}
	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createSaas({
				variables: this.state
			});
		} else {
			this.props.updateSaas({
				variables: this.state
			});
		}
		this.props.toggleMethod(false, '', '')
	}
	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	render() {
		return(
			<div style={styles.root}>
				<form style={styles.form} onSubmit={this.onSubmit.bind(this)}>
					<Grid container spacing={24}>
							<Grid item xs={12}>
								<TextField 	id={"name"} label={"Product"} fullWidth value={this.state.name} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"qty"} fullWidth				
									type="number"
									label={"Quantity"}  
									value={this.state.qty} 
									onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"key"} label={"Key"} fullWidth 
									value={this.state.key} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>

							<Grid item xs={6}>
								<TextField 	id={"email"} label={"Admin Email"} fullWidth 
									value={this.state.adminEmail} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"password"} label={"Admin Password"} fullWidth
									type="password" 
									value={this.state.password} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={12}>
								<TextField 	id={"portalUrl"} label={"Portal Url"} fullWidth
									value={this.state.portalUrl} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
							<FormControlLabel
									control={
										<Checkbox
											checked={this.state.maintenance}
											onChange={ event => this.setState({ [event.target.id]: event.target.value})} 
											value={this.state.maintenance}
											color="primary"
										/>
									}
									label="Maintenance"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button type='submit' variant="contained" color="secondary" style={styles.button} >
									Save
								</Button>
							</Grid>
					</Grid>
				</form>
			</div>
		)
	}
}


export default compose(
	graphql(UPDATE_SAAP, {
		name : 'updateSaap',
		refetchQueries: [{query: GET_SAAPS}]
  }),
	graphql(ADD_SAAP, {
		name : 'createSaap',
		refetchQueries: [{query: GET_SAAPS}]
  })
)(SaapMutationForm);
