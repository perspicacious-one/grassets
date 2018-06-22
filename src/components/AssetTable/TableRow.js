
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ViewListIcon from '@material-ui/icons/ViewList';
import Button from '@material-ui/core/Button';


const styles = {
	button: {
		textTransform: 'lowercase',
	},

}
class CustomTableRow extends React.Component {
	constructor(props) {
		super(props)
		this.renderCell = this.renderCell.bind(this);
		this.matchValues = this.matchValues.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	matchValues() {
		let result = this.props.meta.map(key => { 
			var match = this.props.entry[key];
			if(match === undefined) {
				return ""
			} else {
				return match;
			}
		})
		return result;
	}

	toggleDrawer(active, id) {
		this.props.toggleMethod(active, id);
	}

	renderCell(val) {
		var reg = new RegExp(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/)

		switch (true) {
			case val == null:
				return <TableCell></TableCell>
			case reg.test(val):
				return (
					<TableCell>
					<a href={val || '#'} target="_blank">
						<OpenInNewIcon />
					</a>
					</TableCell>
				);
			case typeof val === 'object':
				return(
					<TableCell>
						<Button key={val.id} style={styles.button} color="secondary" onClick={ () => this.toggleDrawer(true, val.id) }>
							<ViewListIcon />
							{val.email}
						</Button>
					</TableCell>
				);
			default:
				return( <TableCell>{val}</TableCell>);
		}

	}
	render() {
		const cells = this.matchValues();
		return(
			<TableRow key={this.props.entry.id}>
				<TableCell component="th" scope="row">
					{cells[0]}
				</TableCell>
				{
					cells.slice(1).map(cell => this.renderCell(cell))
				}
			</TableRow>
		)
	}
}
export default CustomTableRow