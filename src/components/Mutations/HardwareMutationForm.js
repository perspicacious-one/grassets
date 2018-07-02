import { compose, graphql} from 'react-apollo'
import {
	ADD_HARDWARE,
	UPDATE_HARDWARE
} from './index';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import {HardwareRelationsList} from '../FormList';
import DataMap from '../common/Mapping';
import {MapToControl} from '../common/Mapping';

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
			employee: []
		}
		this.onSubmit = this.onSubmit.bind(this);
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
	}

	onSubmit(event) {
		event.preventDefault();
	
		if(!this.state.id) {
			this.props.createRecord({
				variables: this.state
			});
		} else {
			this.props.updateRecord({
				variables: this.state
			});
		}
		this.props.toggleMethod(false, '', '')
	}
	handleLinkChange(data, event) {	
		this.props.handleLinkChange
		if(data){
		this.setState({
			employee: data.employee
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
		const { id, maker, model, drivers, hardwareType, employee } = this.state;
		return(
				<form style={styles.root} onSubmit={this.onSubmit.bind(this)}>
					<Grid container spacing={24}>
						<Grid item xs={6}>
							<TextField 	id={"maker"} label={"Manufacturer"} fullWidth value={maker} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
						<Grid item xs={6}>
							<TextField 	id={"model"} label={"Model"} fullWidth value={model} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
						<Grid item xs={12}>
							<TextField 	id={"drivers"} label={"Drivers"} fullWidth value={drivers} onChange={ event => this.setState({ [event.target.id]: event.target.value})} />
						</Grid>
						<Grid item xs={12}>
							<TextField select id={"hardwareType"} label={"Category"} fullWidth value={hardwareType} onChange={ event => this.setState({ "hardwareType": event.target.value})}>
								<MenuItem key={"Laptop"} value={'Laptop'}>Laptop</MenuItem>
								<MenuItem key={"Desktop"} value={'Desktop'}>Desktop</MenuItem>
								<MenuItem key={"Display"} value={'Display'}>Display</MenuItem>
								<MenuItem key={"Accessories"} value={'Accessories'}>Accessories</MenuItem>
							</TextField>
						</Grid>
						{
							this.state.id &&  <HardwareRelationsList parentId={id} dataSource={DataMap.hardware}	relatives={[employee]} callback={() => this.props.handleLinkChange} /> 
						}
						<Grid item xs={6}>
							<Button type='submit' variant="contained" color="secondary" style={styles.button} >
								Save
							</Button>
						</Grid>
					</Grid>
				</form>
		)
	}
}


export default compose(
	graphql(DataMap.hardware.mutate.update, {
		name : 'updateRecord',
		refetchQueries: [DataMap.hardware.query.relatives]
  }),
	graphql(DataMap.hardware.mutate.create, {
		name : 'createRecord',
		refetchQueries: [DataMap.hardware.query.all]
  })
)(HardwareMutationForm);
