import { compose, graphql} from 'react-apollo'
import {
	ADD_HARDWARE,
	UPDATE_HARDWARE
} from './index';
import React from 'react';
import DeleteButton from '../Controls/DeleteButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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


class DetailForm extends React.Component {
	constructor(props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		if(!this.props.data) { return };
		const entries = Object.entries(this.props.data);
		entries.array.forEach(entry => {
			this.setState({
				entry[0]: entry[1],
			})
		});
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
		return(
				<form style={styles.root} onSubmit={this.onSubmit.bind(this)}>
					<Grid container spacing={24}>
						{ this.props.children }
						<Grid item xs={6}>
							<Button type='submit' variant="contained" color="secondary" style={styles.button} >
								Save
							</Button>
						</Grid>
						<Grid item xs={6}>
							<QueryContext.Consumer>
							{ context => (
								<DeleteButton mutation={DataMap[context.typeName].mutate.delete} refetch={context.refetch} />
							)}
							</QueryContext.Consumer>
						</Grid>
					</Grid>
				</form>
		)
	}
}
