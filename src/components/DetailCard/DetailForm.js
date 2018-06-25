import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import { graphql } from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const styles = {
	drawer: {
		maxWidth: '860px',
		width: '640px',
	},
	button: {
		margin: '15px',
	},
	form: {
		minWidth: '500px',
		padding: '28px'
	}
}

class DetailForm extends React.Component {
	constructor(props) {
		super(props)


		this.labels = Object.keys(this.props.data[this.props.type]);
		this.values = Object.values(this.props.data[this.props.type]);

	}
  onSubmit(event) {
		event.preventDefault();
  }
	render() {
		return(

				<form noValidate style={styles.form} onSubmit={this.onSubmit.bind(this)}>
					<h3>{this.props.type}</h3>
					{
						this.labels.map( label => {
							if( !["__typename", "id"].includes(label) ) {
								return(
								<div key={label}>
									<TextField
										id={label}
										label={label}
										value={ this.props.data[this.props.type][label] || ''}
										fullWidth
										margin="normal"
									/>
								</div>
							)
							}
						})
					}
					<Input type='submit' variant="contained" color="secondary" style={styles.button} >
						Save
					</Input>
				</form>
				
		)
	}
}

export default DetailForm