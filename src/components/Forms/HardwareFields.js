import React from 'react';
import { compose, graphql } from 'react-apollo';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import RelationList from '../Controls/RelationList';
import DataMap from '../common/Mapping';
import {FormContext} from '../common/Contexts';

class HardwareFields extends React.Component {
	renderFormFields(context) {
		let { id, maker, model, drivers, hardwareType, employee } = context.state
		if(maker === undefined && model === undefined) { 
			let { id, maker, model, drivers, hardwareType, employee } = ""
		} 
		return(
			<React.Fragment>
			<Grid item xs={6}>
				<TextField 	id={"maker"} label={"Manufacturer"} placeholder="e.g. - Dell" fullWidth value={maker} onChange={ event => context.onChange(event)} />
			</Grid>
			<Grid item xs={6}>
				<TextField 	id={"model"} label={"Model"} placeholder="e.g. - Precision T7600" fullWidth value={model} onChange={event => context.onChange(event)} />
			</Grid>
			<Grid item xs={12}>
				<TextField 	id={"drivers"} label={"Drivers"} placeholder="Dropbox or web link" fullWidth value={drivers} onChange={ event => context.onChange(event)} />
			</Grid>
			<Grid item xs={12}>
				<TextField select id={"hardwareType"} label={"Category"} fullWidth value={hardwareType} onChange={ event => context.onChange(event, 'hardwareType')}>
					<MenuItem id={"Laptop"} key={"Laptop"} value={'Laptop'}>Laptop</MenuItem>
					<MenuItem id={"Desktop"} key={"Desktop"} value={'Desktop'}>Desktop</MenuItem>
					<MenuItem id={"Display"} key={"Display"} value={'Display'}>Display</MenuItem>
					<MenuItem id={"Accessories"} key={"Accessories"} value={'Accessories'}>Accessories</MenuItem>
				</TextField>
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