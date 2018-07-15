import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';
import { Chips } from '../Controls/RelativeChip'

class HardwareFields extends React.Component {

	renderFormFields(context) {
		let { id, maker, model, drivers, details, hardwareType, employee, software } = context.state
		return(
			<React.Fragment>
				<Grid item xs={6}>
					<TextField 	id={"maker"} label={"Manufacturer"} placeholder="e.g. - Dell" fullWidth value={maker || ''} onChange={ event => context.onChange(event)} />
				</Grid>
				<Grid item xs={6}>
					<TextField 	id={"model"} label={"Model"} placeholder="e.g. - Precision T7600" fullWidth value={model || ''} onChange={event => context.onChange(event)} />
				</Grid>
				<Grid item xs={12}>
					<TextField 	id={"drivers"} label={"Files"} placeholder="Link to drivers, manuals, etc..." fullWidth value={drivers || ''} onChange={ event => context.onChange(event)} />
				</Grid>
				<Grid item xs={12}>
					<TextField 	id={"details"} label={"Details"} multiline placeholder="Additional hardware details" fullWidth value={details || ''} onChange={ event => context.onChange(event)} />
				</Grid>
				<Grid item xs={12}>
					<TextField select id={"hardwareType"} label={"Category"} fullWidth value={hardwareType || ''} onChange={ event => context.onChange(event, 'hardwareType')}>
						<MenuItem id={"Laptop"} key={"Laptop"} value={'Laptop'}>Laptop</MenuItem>
						<MenuItem id={"Desktop"} key={"Desktop"} value={'Desktop'}>Desktop</MenuItem>
						<MenuItem id={"Display"} key={"Display"} value={'Display'}>Display</MenuItem>
						<MenuItem id={"Accessories"} key={"Accessories"} value={'Accessories'}>Accessories</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12}>
					{ Chips('employee', employee) }
				</Grid>
				<Grid item xs={12}>
					{ Chips('software', software) }
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

export default HardwareFields