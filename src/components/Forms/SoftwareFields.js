import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import {SaapRelationsList} from '../FormList';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';

export default class SoftwareFields extends React.Component {
		renderFormFields(context) {
			let { id, name, qty, maintenance, key, user, adminEmail, adminPassword, adminPortal } = context.state
			if(name === undefined && key === undefined) { 
				let { id, name, qty, maintenance, key, user, adminEmail, adminPassword, adminPortal } = ""
			} 
			return(
				<React.Fragment>	
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
						id && <SaapRelationsList parentId={id} dataSource={DataMap.saap}	relatives={user} callback={() => this.props.handleLinkChange}  /> 
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