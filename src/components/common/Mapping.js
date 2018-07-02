import React from 'react'
import { 
	GET_EMPLOYEE,
	GET_EMPLOYEE_HARDWARE,
	GET_BILLING,
	GET_HARDWARE,
	GET_SAAS,
	GET_SAAS_EMPLOYEE,
	GET_SAAP,
	GET_SAAP_EMPLOYEE,
	GET_CARD,
	GET_HARDWARES,
	GET_HARDWARES_BASIC,
	GET_SAASES_BASIC,
	GET_SAASES,
	GET_SAAPS_BASIC,
	GET_SAAPS,
	GET_EMPLOYEES,
	GET_EMPLOYEES_BASIC
} from '../Queries';

import { 
	REMOVE_EMPLOYEE_FROM_HARDWARE,
	ADD_EMPLOYEE_TO_HARDWARE,
	ADD_EMPLOYEE_TO_SAAP,
	REMOVE_EMPLOYEE_FROM_SAAP,
	UPDATE_EMPLOYEE,
	ADD_EMPLOYEE,
	UPDATE_HARDWARE,
	ADD_HARDWARE,
	UPDATE_SAAS,
	ADD_SAAS,
	UPDATE_SAAP,
	ADD_SAAP,
	ADD_EMPLOYEE_TO_SAAS,
	REMOVE_EMPLOYEE_FROM_SAAS,
} from '../Mutations';
import { GetDisplayName } from '../../utils/string';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const DataMap = {
	employee: {
		query: {
			all: GET_EMPLOYEES,
			allBasic: GET_EMPLOYEES_BASIC,
			byId: GET_EMPLOYEE,
			relatives: [GET_EMPLOYEE_HARDWARE, GET_SAAP_EMPLOYEE, GET_SAAS_EMPLOYEE]
		},
		mutate: {
			addRelative: {
				hardwares: ADD_EMPLOYEE_TO_HARDWARE,
				subscription: ADD_EMPLOYEE_TO_SAAS,
				saap: ADD_EMPLOYEE_TO_SAAP
			},
			removeRelative: {
				hardwares: REMOVE_EMPLOYEE_FROM_HARDWARE,
				subscription: REMOVE_EMPLOYEE_FROM_SAAS,
				saap: REMOVE_EMPLOYEE_FROM_SAAP
			},
			update: UPDATE_EMPLOYEE,
			create: ADD_EMPLOYEE
		},
		displayName: 'Employees',
		refName: 'employee',
		relativeTypes: ['subscription', 'saap', 'hardwares']
	},
	hardware: {
		query: {
			all: GET_HARDWARES, 
			allBasic: GET_HARDWARES_BASIC, 
			byId: GET_HARDWARE,
			relatives: GET_EMPLOYEE_HARDWARE
		},
		mutate: {
			addRelative: {
				employee: ADD_EMPLOYEE_TO_HARDWARE,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_HARDWARE,
			},
			update: UPDATE_HARDWARE,
			create: ADD_HARDWARE
		},
		displayName: 'Hardware',
		refName: 'hardware',
		relativeTypes: 'employee',
	},
	saas: {
		query: {
			all: GET_SAASES,
			allBasic: GET_SAASES_BASIC,
			byId: GET_SAAS,
			relatives: GET_SAAS_EMPLOYEE
		},
		mutate: {
			addRelative: {
				employee: ADD_EMPLOYEE_TO_SAAS,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_SAAS,
			},
			update: UPDATE_SAAS,
			create: ADD_SAAS
		},
		displayName: 'Subscriptions',
		refName: 'saas',
		relativeTypes: 'employee',
	},
	saap: {
		query: {
			all: GET_SAAPS,
			allBasic: GET_SAAPS_BASIC,
			byId: GET_SAAP,
			relatives: GET_SAAP_EMPLOYEE
		},
		mutate: {
			addRelative: {
				employee: ADD_EMPLOYEE_TO_SAAP,
			},
			removeRelative: {
				employee: REMOVE_EMPLOYEE_FROM_SAAP,
			},
			update: UPDATE_SAAP,
			create: ADD_SAAP
		},
		displayName: 'Desktop Software',
		refName: 'saap',
		relativeTypes: 'employee',
	}
}


export default DataMap;

const LabelNames = {
	maker: 'Manufacturer',
	model: 'Model',
	hardwareType: 'Category',
	drivers: 'Drivers',
	details: 'Details',
	name: 'Name',
	qty: 'Count',
	key:	'Key',
	adminEmail: 'Admin Email',
	adminPassword: 'Admin Password',
	adminPortal:	'Admin Portal',
	user: 'User/Employee',
	email: 'Email',
	firstName: 'First Name',
	lastName: 'Last Name',
}

export const MapToControl = (val) => {
	if(!val[0]) { return null}
	if(!val[1]) { return null}
	if(val[0] === 'id') { return null } 
		else {

		try{
			if(val[0] === 'hardwareType') {
				return(
					<Grid item xs={12}>
						<TextField select id={val[0]} label={"Category"} fullWidth value={this.state[val[0]]} onChange={ event => this.setState({ 'hardwareType': event.target.value})}>
							<MenuItem key={"Laptop"} value={'Laptop'}>Laptop</MenuItem>
							<MenuItem key={"Desktop"} value={'Desktop'}>Desktop</MenuItem>
							<MenuItem key={"Display"} value={'Display'}>Display</MenuItem>
							<MenuItem key={"Accessories"} value={'Accessories'}>Accessories</MenuItem>
						</TextField>
					</Grid>
				)
			}
			switch(typeof val[1]) {
				case('object'):
					return (
						<Grid item xs={12}>
							<Chip id={val.id} key={val.id} label={getFieldLabel(val.__typename)}	onDelete={(e) => this.unLink(val.id, e) }/>
						</Grid>
					)
				case('string'):
					return(
						<Grid item xs={SetColumnWidth(val[1])}>
							<TextField 	id={val[0]} label={getFieldLabel(val)} fullWidth value={this.state[val[0]]} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
					)
				case('boolean'):
					return (
						<Grid item xs={6}>
						<FormControlLabel
								control={
									<Checkbox
										id={val[0]}
										checked={this.state[val[0]]}
										onChange={ event => this.setState({ [event.target.id]: event.target.checked})} 
										value={this.state[val[0]]}
										color="primary"
									/>
								}
								label={getFieldLabel(val)}
							/>
						</Grid>
					)
				case('number'):
					return (
						<Grid item xs={6}>
							<TextField 	id={val[0]} fullWidth				
								type="number"
								label={"Quantity"}  
								value={this.state.val[0]} 
								onChange={ event => this.setState({ [event.target.id]: parseInt(event.target.value, 10)})} />
						</Grid>
					)
				case('undefined'):
					return (
						<Grid item xs={SetColumnWidth(val[1])}>
							<TextField 	id={val[0]} label={getFieldLabel(val)} fullWidth value={this.state[val[0]]} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
					);
				default: 
					return null;
			}
		}
		catch(e) {
			console.log(e.message);
			console.log(val)
		}
	}
	
}

function SetColumnWidth(val) {
	if(!val) {return}
	val.length > 24 ? 12 : 6
}

function getFieldLabel(val) {
	Object.keys(LabelNames).forEach( key => {
		if(key == val[0]) {
			return LabelNames[key];
		}  
	});
	return val[0].toString(); 
}