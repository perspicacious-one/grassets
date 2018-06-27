import { compose, graphql, Query } from 'react-apollo'
import {
	ADD_HARDWARE,
	UPDATE_HARDWARE
} from './index';
import React from 'react';
import Loading from '../common/Loading';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { GET_HARDWARES, GET_EMPLOYEES_BASIC, GET_HARDWARE } from '../Queries';
import RelationList from '../Controls/RelationList';
import DataMap from '../common/DataSource';

const styles = {
	button: {
		margin: '15px',
	},
	root: {
		flexGrow: 1,
		maxWidth: '800px'
  },
	form: {
		minWidth: '500px',
		padding: '28px'
	}
}


class HardwareMutationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			id: '',
			maker: '',
			model: '',
			drivers: '',
			hardwareType: '',
			employee: ''
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.relationList = null;
	}
	componentDidMount() {
		if(!this.props.data) { return };
		let { id, maker, model, drivers, hardwareType, employee } = this.props.data;
		this.setState({
			id: id,
			maker: maker,
			model: model,
			drivers: drivers,
			hardwareType: hardwareType,
			employee: employee,
		})
		this.relationList = (<RelationList id={this.state.id} dataSource={DataMap.hardware} relatives={this.state.employee}	/>)

	}

	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createHardware({
				variables: this.state
			});
		} else {
			this.props.updateHardware({
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
						<Grid item xs={6}>
							<TextField 	id={"maker"} label={"Manufacturer"} fullWidth value={this.state.maker} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
						<Grid item xs={6}>
							<TextField 	id={"model"} label={"Model"} fullWidth value={this.state.model} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
						<Grid item xs={12}>
							<TextField 	id={"drivers"} label={"Drivers"} fullWidth value={this.state.drivers} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
							<TextField select id={"hardwareType"} label={"Category"} fullWidth value={this.state.hardwareType} onChange={ event => this.setState({ "hardwareType": event.target.value})}>
								<MenuItem key={"Laptop"} value={'Laptop'}>Laptop</MenuItem>
								<MenuItem key={"Desktop"} value={'Desktop'}>Desktop</MenuItem>
								<MenuItem key={"Display"} value={'Display'}>Display</MenuItem>
								<MenuItem key={"Accessories"} value={'Accessories'}>Accessories</MenuItem>
							</TextField>
							{ this.relationList }
						</Grid>
						<Grid item xs={6}>
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
	graphql(UPDATE_HARDWARE, {
		name : 'updateHardware',
		refetchQueries: [GET_HARDWARES]
  }),
	graphql(ADD_HARDWARE, {
		name : 'createHardware',
		refetchQueries: [GET_HARDWARES]
  })
)(HardwareMutationForm);
