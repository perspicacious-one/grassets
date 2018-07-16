import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';
import Typography from '@material-ui/core/Typography';
import { Chips } from '../Controls/RelativeChip'

const styles = {
	group: {
		padding: '12px',
		marginLeft: '10px',
		marginRight: '10px',
		backgroundColor: '#EEEEEE'
	}
}
export default class EmployeeFields extends React.Component {
	renderFormFields(context) {
		let { id, firstName, lastName, email, saap, hardware, subscription } = context.state
		return(
			<React.Fragment>

			<Grid item xs={12}>								
				<TextField
					id='firstName'
					label='First Name'
					value={ firstName || '' }
					fullWidth
					margin="normal"
					onChange={ event => context.onChange(event)}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id='lastName'
					label='Last Name'
					value={ lastName || '' }
					fullWidth
					margin="normal"
					onChange={ event => context.onChange(event) }
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="email"
					label="Email"
					type="email"
					value={ email || '' }
					fullWidth
					margin="normal"
					onChange={ event => context.onChange(event) }
				/>
			</Grid>
			{
				id && 
				<React.Fragment>
					<Grid item xs={12} style={styles.group}>
						<Typography varient="subtitle" gutterBottom>
							Hardware
		        </Typography>
						{ Chips('hardware', hardware) }
					</Grid>
					<Grid item xs={12} style={styles.group}>
						<Typography variant="subtitle" gutterBottom>
							Software
						</Typography>
						{ Chips('saap', saap) }
					</Grid>
					<Grid item xs={12} style={styles.group}>
						<Typography variant="subtitle" gutterBottom>
							Subscriptions
						</Typography>
						{ Chips('subscription', subscription) }
					</Grid>
				</React.Fragment>
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