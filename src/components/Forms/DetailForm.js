import React from 'react';
import DeleteButton from '../Controls/DeleteButton';
import {UpdateButton, CreateButton} from '../Controls/UpdateButton';
import {DrawerContext} from '../common/Contexts';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer'
import {FormContext} from '../common/Contexts';
import PropTypes from 'prop-types';

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
	formActions: {
		marginTop: '20px'
	}
}


class DetailForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleLinkChange = this.handleLinkChange.bind(this)
	}
	componentDidMount() {
		if(!this.props.data) { return };
		const entries = Object.entries(this.props.data);
		entries.forEach(entry => {
			this.setState({
				[entry[0]]: entry[1],
			})
		});
	}

	handleLinkChange(data, event) {	
		if(data){
			this.setState({
				employee: data.employee
			})
		}
	}
	handleChange(event, altId = null) {
		event.preventDefault();
		if(!altId) {
			this.setState({
				[event.target.id]: event.target.value
			})
		} else {
			this.setState({
				[altId]: event.target.value
			})
		}
	}
	shouldRenderChildren() {
		const length = Object.keys(this.state).length;
		if(length <= 1 && this.props.empty) { return true }
		if(length <= 1) { return false }
		if(length > 1 && !this.props.empty) { return true}
		return true
	}
	render() {
		return(
			<FormContext.Provider value={{ 
				state: this.state,
				onChange: this.handleChange,
				linkAction: this.handleLinkChange
				}} >
				<div>
					<Grid container spacing={24} style={styles.root}>
						{ this.shouldRenderChildren() ? this.props.children : null}
					</Grid>
					<Grid container spacing={24} style={styles.formActions}>
							<DrawerContext.Consumer>
							{context => 
								<React.Fragment>
								<Grid item xs={6}>
									{
										!this.state.id ? <CreateButton variables={this.state} callback={context.toggle} /> : <UpdateButton variables={this.state} callback={context.toggle} />
									}
									
								</Grid>
								<Grid item xs={6}>
									{
										this.state.id && <DeleteButton id={this.state.id} callback={context.toggle} />
									}
								</Grid>
								</React.Fragment>
							}
							</DrawerContext.Consumer>
						</Grid>
				</div>
			</FormContext.Provider>
		)
	}
}

DetailForm.defaultProps = {
  empty: false
};

export default  DetailForm