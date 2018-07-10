import { compose, graphql } from 'react-apollo'
import {
	ADD_SAAS,
	UPDATE_SAAS
} from './index';
import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { FormatDate } from '../../utils/string';
import DataMap from '../common/Mapping';
import {SaasRelationsList} from '../FormList';
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
		let { id, name, cost, qty, renewalTerm, expiration, user, adminEmail, adminPassword, adminPortal } = this.props.data;
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
			user: user
		})
	}

	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createSaas({
				variables: this.state
			})
		} else {
			this.props.updateSaas({
				variables: this.state
			});
		}
		this.props.toggleMethod(false, '', '')
	}
	handleLinkChange(data, event) {	
		this.props.handleLinkChange
		if(data){
			this.setState({
				user: data.user
			})
		}
	}
	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.id]: event.target.value
		})
	}
	render() {
		const { id, name, cost, qty, expiration, renewalTerm, user, adminEmail, adminPassword, adminPortal} = this.state
		return(
				<form onSubmit={this.onSubmit.bind(this)}>
					<Grid container spacing={24} style={styles.root}>
							<Grid item xs={12}>
								<TextField 	id={"name"} label={"Product"} fullWidth value={name} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							</Grid>
							<Grid item xs={6}>
							<FormControl fullWidth>
								<InputLabel htmlFor="cost">Cost</InputLabel>
								<Input
									id="cost"
									type="number"
									value={cost}
									onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} 
									startAdornment={<InputAdornment position="start">$</InputAdornment>}
								/>
							</FormControl>
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"qty"} fullWidth				
									type="number"
									label={"Quantity"}  
									value={qty} 
									onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} />
							</Grid>
							<Grid item xs={6}>
								<TextField 	id={"expiration"} label={"Expiration"} fullWidth 
									type="date"
									value={expiration} 
									InputLabelProps={{
										shrink: true,
									}}
									onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
								</Grid>
							<Grid item xs={6}>
								<TextField select id={"renewalTerm"} label={"Renewal Period"} fullWidth 
									value={renewalTerm} 
									onChange={ event => this.setState({ "renewalTerm": event.target.value})}
								>
									<MenuItem key={"Monthly"} value={'Monthly'}>Monthly</MenuItem>
									<MenuItem key={"Annually"} value={'Annually'}>Annually</MenuItem>
								</TextField>
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
								{	
									id &&  <SaasRelationsList parentId={id} dataSource={DataMap.saas}	relatives={user} callback={() => this.props.handleLinkChange} /> 
								}
					</Grid>
					<Grid container spacing={24} style={styles.formActions}>
							<Grid item xs={6}>
								<Button type='submit' color="primary" variant="fab" style={styles.button} >
									<SaveIcon />
								</Button>
							</Grid>
							<Grid item xs={6}>
									<DeleteButton id={id} />
							</Grid>
						</Grid>
				</form>
		)
	}
}


export default compose(
	graphql(UPDATE_SAAS, {
		name : 'updateSaas',
		refetchQueries: [DataMap.saas.query.allBasic]
  }),
	graphql(ADD_SAAS, {
		name : 'createSaas',
		refetchQueries: [DataMap.saas.query.allBasic]
  })
)(SaasMutationForm);
