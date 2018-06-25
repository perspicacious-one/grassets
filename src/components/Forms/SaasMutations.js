import { compose, graphql } from 'react-apollo'
import {
	ADD_SAAS,
	UPDATE_SAAS
} from './Mutations';
import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { GET_SAASES } from '../graphql/ListQueries'
import { FormatDate } from '../../utils/StringUtil';

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


class SaasMutationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			id: '',
			name: '',
			cost: 0.00,
			qty: 0,
			renewalTerm: '',
			expiration: '',
			adminEmail: '',
			adminPassword: '',
			adminPortal: '',
		}
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		if(!this.props.data) { return };
		let { id, name, cost, qty, renewalTerm, expiration, adminEmail, adminPassword, adminPortal } = this.props.data;
		this.setState({
			id: id,
			name: name,
			cost: cost,
			qty: qty,
			renewalTerm: renewalTerm,
			expiration: FormatDate(expiration),
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
							<FormControl fullWidth>
								<InputLabel htmlFor="cost">Cost</InputLabel>
								<Input
									id="cost"
									type="number"
									value={this.state.cost}
									onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} 
									startAdornment={<InputAdornment position="start">$</InputAdornment>}
								/>
							</FormControl>
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"qty"} fullWidth				
									type="number"
									label={"Quantity"}  
									value={this.state.qty} 
									onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"expiration"} label={"Expiration"} fullWidth 
									type="date"
									value={this.state.expiration} 
									InputLabelProps={{
										shrink: true,
									}}
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
								</Grid>
							<Grid item xs={6}>
								<TextField select id={"renewalTerm"} label={"Renewal Period"} fullWidth 
									value={this.state.renewalTerm} 
									onChange={ event => this.setState({ "renewalTerm": event.target.value})}
								>
									<MenuItem key={"Monthly"} value={'Monthly'}>Monthly</MenuItem>
									<MenuItem key={"Annually"} value={'Annually'}>Annually</MenuItem>
								</TextField>
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
							<Grid item xs={6}>
								<TextField 	id={"portalUrl"} label={"Portal Url"} fullWidth
									value={this.state.portalUrl} 
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
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
	graphql(UPDATE_SAAS, {
		name : 'updateSaas',
		refetchQueries: [{query: GET_SAASES}]
  }),
	graphql(ADD_SAAS, {
		name : 'createSaas',
		refetchQueries: [{query: GET_SAASES}]
  })
)(SaasMutationForm);
