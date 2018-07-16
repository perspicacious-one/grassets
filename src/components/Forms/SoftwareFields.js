import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';
import { Chips } from '../Controls/RelativeChip'

const styles = {
	group: {
		padding: '12px',
		marginLeft: '10px',
		marginRight: '10px',
		backgroundColor: '#EEEEEE'
	}
}
export default class SoftwareFields extends React.Component {
		renderFormFields(context) {
			let { id, name, qty, maintenance, key, user, hardware, adminEmail, adminPassword, adminPortal } = context.state

			return(
				<React.Fragment>	
					<Grid item xs={12}>
						<TextField 	id={"name"} label={"Product"} fullWidth value={name || ''} onChange={ event => context.onChange(event)} />
					</Grid>
					<Grid item xs={6}>
						<TextField 	id={"qty"} fullWidth				
							type="number"
							label={"Quantity"}  
							value={qty || ''} 
							onChange={ event => context.onChange(event) } />
					</Grid>
					<Grid item xs={6}>
						<TextField 	id={"key"} label={"Key"} fullWidth 
							value={key || ''} 
							onChange={ event => context.onChange(event)} />
					</Grid>
					<Grid item xs={6}>
						<TextField 	id={"adminEmail"} label={"Admin Email"} fullWidth 
							value={adminEmail || ''} 
							onChange={ event => context.onChange(event)} />
					</Grid>
					<Grid item xs={6}>
						<TextField 	id={"adminPassword"} label={"Admin Password"} fullWidth
							type="password" 
							value={adminPassword || ''} 
							onChange={ event => context.onChange(event)} />
					</Grid>
					<Grid item xs={12}>
						<TextField 	id={"adminPortal"} label={"Portal Url"} fullWidth
							value={adminPortal || ''} 
							onChange={ event => context.onChange(event)} />
					</Grid>
					<Grid item xs={6}>
					<FormControlLabel
							control={
								<Checkbox
									id={'maintenance'}
									checked={maintenance}
									onChange={ event => context.onChange(event) } 
									value={maintenance || false}
									color="primary"
								/>
							}
							label="Maintenance"
						/>
					</Grid>
					<Grid item xs={12} style={styles.group}>
					<Typography varient="subtitle" gutterBottom>
						Users
          </Typography>
					{ Chips('user', user) }
					</Grid>
						<Grid item xs={12} style={styles.group}>
						<Typography varient="subtitle" gutterBottom>
							Hardware
	          </Typography>
						{ Chips('hardware', hardware) }
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