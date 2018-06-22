import React from 'react';
import TextField from '@material-ui/core/TextField';

const styles = {
	form: {
		minWidth: '500px',
		padding: '28px'
	}
}
class DetailForm extends React.Component {
		constructor(props) {
			super(props)

			this.labels = Object.keys(this.props.results.Employee);
			this.values = Object.values(this.props.results.Employee);

		}
		render() {

			return(
				<form noValidate style={styles.form}>
					<h3>{this.props.results.Employee.__typename}</h3>
					{
						this.labels.map( label => {
							if( !["__typename", "id"].includes(label) ) {
								return(
								<div>
									<TextField
										id={label}
										label={label}
										value={this.props.results.Employee[label]}
										fullWidth
										margin="normal"
									/>
								</div>
							)
							}
						})
					}
				</form>
			)
		}
}
export default DetailForm;