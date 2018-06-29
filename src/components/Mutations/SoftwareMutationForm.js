import { compose, graphql } from 'react-apollo'
import {
	ADD_SAAP,
	UPDATE_SAAP
} from './index';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { GET_SAAPS } from '../Queries/ListQueries';
import DataMap from '../common/DataSource';
import {SaapRelationsList} from '../Controls/RelationList';

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
			maintenance: false,
			key: '',
			adminEmail: '',
			adminPassword: '',
			adminPortal: '',
		}
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		if(!this.props.data) { return };
		let { id, name, qty, maintenance, key, employee, adminEmail, adminPassword, adminPortal } = this.props.data;
		this.setState({
			id: id,
			name: name,
			qty: qty,
			maintenance: maintenance,
			key: key,
			adminEmail: adminEmail,
			adminPassword: adminPassword,
			adminPortal: adminPortal,
			employee
		})
	}
	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createSaap({
				variables: this.state
			});
		} else {
			this.props.updateSaap({
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
		const { id, name, key, qty, employee, adminEmail, adminPassword, adminPortal, maintenance} = this.state
		return(
			<div style={styles.root}>
				<form style={styles.form} onSubmit={this.onSubmit.bind(this)}>
					<Grid container spacing={24}>
							<Grid item xs={12}>
								<TextField 	id={"name"} label={"Product"} fullWidth value={name} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"qty"} fullWidth				
									type="number"
									label={"Quantity"}  
									value={qty} 
									onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"key"} label={"Key"} fullWidth 
									value={key} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>

							<Grid item xs={6}>
								<TextField 	id={"adminEmail"} label={"Admin Email"} fullWidth 
									value={adminEmail} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"adminPassword"} label={"Admin Password"} fullWidth
									type="password" 
									value={adminPassword} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={12}>
								<TextField 	id={"adminPortal"} label={"Portal Url"} fullWidth
									value={adminPortal} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
							<FormControlLabel
									control={
										<Checkbox
											id={'maintenance'}
											checked={maintenance}
											onChange={ event => this.setState({ [event.target.id]: event.target.checked})} 
											value={maintenance}
											color="primary"
										/>
									}
									label="Maintenance"
								/>
							</Grid>
							<Grid item xs={12}>
									{	
										id &&  <SaapRelationsList parentId={id} dataSource={DataMap.saap}	relatives={[employee]} callback={this.props.handleLinkChange} /> 
									}
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
