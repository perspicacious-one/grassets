import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHeader from './TableHeader';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DetailCard from '../DetailCard/DetailCard';
import CustomTableRow from './TableRow';
import AddIcon from '@material-ui/icons/Add';

const styles = {
	paper: {
		maxWidth: 1180,
		margin: 'auto'
	},
	button: {
		margin: '15px',
		float: 'right'
	}
}

class AssetTable extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false,
			usedBy: ""
		}
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.renderRows = this.renderRows.bind(this);
	}



	toggleDrawer = (close, id) => {
    this.setState({
			active: close,
			usedBy: id
    });
	};

	renderRows = (n) => {
		return (
			<TableRow key={n.id}>
				<TableCell component="th" scope="row">
					{n.maker}
				</TableCell>
				<TableCell>{n.model}</TableCell>
				<TableCell>{n.hardwareType}</TableCell>
				<TableCell>
					<a href={n.drivers || '#'} target="_blank">
						<OpenInNewIcon />
					</a>
				</TableCell>
				<TableCell>
					{n.employee != undefined ? this.renderButton(n.employee) : ""}
				</TableCell>
			</TableRow>
		)
	}

	render() {
		const labels = Object.keys(this.props.assets[0]).filter( label => !["__typename", "id"].includes(label) );

		return(
			<Paper style={styles.paper}>
				<Table>
					<TableHeader headings={labels} />
					<TableBody>
						{ 
							this.props.assets.map(n => <CustomTableRow entry={n} meta={labels} toggleMethod={this.toggleDrawer}/> ) 
						}
					</TableBody>
				</Table>
				<DetailCard active={this.state.active} queryVariable={this.state.usedBy} toggleMethod={this.toggleDrawer}/>
				<Button variant="fab" color="secondary" aria-label="add" style={styles.button} onClick={ () => this.toggleDrawer(true)} >
					<AddIcon />
				</Button>
			</Paper>
		)
	}
}

export default AssetTable;