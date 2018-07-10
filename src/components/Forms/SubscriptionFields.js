import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import {SaasRelationsList} from '../FormList';
import { FormatDate } from '../../utils/string';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';

export default class SubscriptionFields extends React.Component {
	renderFormFields(context) {
		let { id, name, cost, qty, expiration, renewalTerm, user, adminEmail, adminPassword, adminPortal } = context.state
		if(name === undefined && expiration === undefined) { 
			let { id, name, cost, qty, expiration, renewalTerm, user, adminEmail, adminPassword, adminPortal } = ""
		} 
		return(
			<React.Fragment>
				<Grid item xs={12}>
					<TextField id={"name"} label={"Product"} fullWidth value={name} onChange={event => this.setState({ [event.target.id]: event.target.value })} />
				</Grid>
				<Grid item xs={6}>
					<FormControl fullWidth>
						<InputLabel htmlFor="cost">Cost</InputLabel>
						<Input
							id="cost"
							type="number"
							value={cost}
							onChange={event => this.setState({ [event.target.id]: parseInt(event.target.value, 10) })}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<TextField id={"qty"} fullWidth
						type="number"
						label={"Quantity"}
						value={qty}
						onChange={event => this.setState({ [event.target.id]: parseInt(event.target.value, 10) })} />
				</Grid>
				<Grid item xs={6}>
					<TextField id={"expiration"} label={"Expiration"} fullWidth
						type="date"
						value={FormatDate(expiration)}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={event => this.setState({ [event.target.id]: event.target.value })} />
				</Grid>
				<Grid item xs={6}>
					<TextField select id={"renewalTerm"} label={"Renewal Period"} fullWidth
						value={renewalTerm}
						onChange={event => this.setState({ "renewalTerm": event.target.value })}
					>
						<MenuItem key={"Monthly"} value={'Monthly'}>Monthly</MenuItem>
						<MenuItem key={"Annually"} value={'Annually'}>Annually</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={6}>
					<TextField id={"adminEmail"} label={"Admin Email"} fullWidth
						value={adminEmail}
						onChange={event => this.setState({ [event.target.id]: event.target.value })} />
				</Grid>
				<Grid item xs={6}>
					<TextField id={"adminPassword"} label={"Admin Password"} fullWidth
						type="password"
						value={adminPassword}
						onChange={event => this.setState({ [event.target.id]: event.target.value })} />
				</Grid>
				<Grid item xs={12}>
					<TextField id={"adminPortal"} label={"Portal Url"} fullWidth
						value={adminPortal}
						onChange={event => this.setState({ [event.target.id]: event.target.value })} />
				</Grid>
				{
					id && <SaasRelationsList parentId={id} dataSource={DataMap.saas} relatives={user} callback={() => this.props.handleLinkChange} />
				}
			</React.Fragment>	
		)
	}
	render() {
		return(
			<FormContext.Consumer>
				{ context => this.renderFormFields(context)	}
			</FormContext.Consumer>
		)
	}
}