import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { FormatDate } from '../../utils/string';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';
import { Chips } from '../Controls/RelativeChip'

export default class SubscriptionFields extends React.Component {
	renderFormFields(context) {
		let { id, name, cost, qty, expiration, renewalTerm, user, adminEmail, adminPassword, adminPortal } = context.state

		return(
			<React.Fragment>
				<Grid item xs={12}>
					<TextField id={"name"} label={"Product"} fullWidth value={name || ''} onChange={event => context.onChange(event) } />
				</Grid>
				<Grid item xs={6}>
					<FormControl fullWidth>
						<InputLabel htmlFor="cost">Cost</InputLabel>
						<Input
							id="cost"
							type="number"
							value={cost || ''}
							onChange={event => context.onChange(event)}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<TextField id={"qty"} fullWidth
						type="number"
						label={"Quantity"}
						value={qty || ''}
						onChange={event => context.onChange(event )} />
				</Grid>
				<Grid item xs={6}>
					<TextField id={"expiration"} label={"Expiration"} fullWidth
						type="date"
						value={FormatDate(expiration) || ''}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={event => context.onChange(event) } />
				</Grid>
				<Grid item xs={6}>
					<TextField select id={"renewalTerm"} label={"Renewal Period"} fullWidth
						value={renewalTerm || ''}
						onChange={event => context.onChange(event, "renewalTerm" )}
					>
						<MenuItem key={"Monthly"} value={'Monthly'}>Monthly</MenuItem>
						<MenuItem key={"Annually"} value={'Annually'}>Annually</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={6}>
					<TextField id={"adminEmail"} label={"Admin Email"} fullWidth
						value={adminEmail || ''}
						onChange={event => context.onChange(event) } />
				</Grid>
				<Grid item xs={6}>
					<TextField id={"adminPassword"} label={"Admin Password"} fullWidth
						type="password"
						value={adminPassword || ''}
						onChange={event => context.onChange(event) } />
				</Grid>
				<Grid item xs={12}>
					<TextField id={"adminPortal"} label={"Portal Url"} fullWidth
						value={adminPortal || ''}
						onChange={event => context.onChange(event) } />
				</Grid>
				<Grid item xs={12}>
					{ Chips('user', user) }
				</Grid>
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