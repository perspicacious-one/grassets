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
import DataMap from '../common/Mapping';
import {SaapRelationsList} from '../FormList';

const styles = {
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		flexGrow: 1,
		maxWidth: '100%'
	},
	panelActionBottom: {
		alignSelf: 'flex-end'
	},
	button: {
		marginTop: '15px',
		bottom: '15px',
	},
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
		let { id, name, qty, maintenance, key, user, adminEmail, adminPassword, adminPortal } = this.props.data;
		this.setState({
			id: id,
			name: name,
			qty: qty,
			maintenance: maintenance,
			key: key,
			adminEmail: adminEmail,
			adminPassword: adminPassword,
			adminPortal: adminPortal,
			user: user
		})
	}
	handleLinkChange(data, e) {
		e.preventDefault();

		this.setState({
			user: [data].concat(this.state.user)
		})
	}
	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createSaap({
				variables: this.state,
			});
		} else {
			this.props.updateSaap({
				variables: this.state
			});
		}
		this.props.refresh()
		this.props.toggleMethod(false, '', '')	
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	render() {
		const { id, name, key, qty, user, adminEmail, adminPassword, adminPortal, maintenance} = this.state
		return(
				<form style={styles.root} onSubmit={this.onSubmit.bind(this)}>
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
							{	
								id &&  <SaapRelationsList parentId={id} dataSource={DataMap.saap}	relatives={user} callback={() => this.props.handleLinkChange}  /> 
							}
							<Grid item xs={12} style={styles.panelActionBottom}>
								<Button type='submit' variant="contained" color="secondary" style={styles.button} >
										Save
								</Button>
							</Grid>
					</Grid>
				</form>
		)
	}
}


export default compose(
	graphql(UPDATE_SAAP, {
		name : 'updateSaap',
		refetchQueries: [{query: DataMap.saap.query.allBasic}]
  }),
	graphql(ADD_SAAP, {
		name : 'createSaap',
		refetchQueries: [{query: DataMap.saap.query.allBasic}]
  })
)(SaapMutationForm);
