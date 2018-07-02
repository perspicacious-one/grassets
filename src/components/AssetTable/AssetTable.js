import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHeader from './TableHeader';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CustomTableRow from './TableRow';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import FormLoader from '../Forms/FormLoader'
import Divider from '@material-ui/core/Divider';

const styles = {
	paper: {
		maxWidth: 1180,
		margin: 'auto',
		paddingTop: '15px'
	},
	buttonLeft: {
		margin: '20px',
		float: 'left'
	},
	buttonRight: {
		margin: '20px',
		float: 'right'
	},
	drawer: {
		maxWidth: '860px',
		minWidth: '720px',
		padding: '20px'
	},
	drawerContent: {
		padding: '28px',
		margin: '0',
		display: 'flex',
		alignItems: 'stretch',
		flexGrow: 1,
	},
	heading: {
		margin: '25px',
		textAlign: 'center'
	}
}

class AssetTable extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false,
			usedBy: "",
			subType: ""
		}
		this.typename = this.props.typename;
		this.labels = Object.keys(this.props.assets[0]).filter( label => !["__typename", "id"].includes(label) );
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer = (open, id, type) => {
    this.setState({
			active: open,
			usedBy: id,
			subType: type
		});
	};

	renderDrawerContent = () => {
		if(!this.state.active) {
			return null;
		}
		if(this.state.active && !this.state.usedBy) {
			return( <FormLoader noQuery={true} typename={this.typename} toggleMethod={this.toggleDrawer} refresh={this.props.refresh}/> )
		} else {
			return( <FormLoader noQuery={false} typename={this.state.subType} toggleMethod={this.toggleDrawer} variable={this.state.usedBy} refresh={this.props.refresh}/> )
		}
	}
	render() {

		return(
			<Paper style={styles.paper}>
				<div style={styles.heading}>
					<h2>{this.props.displayName}</h2>
				</div>
				<Table>
					<TableHeader headings={this.labels} />
					<TableBody>
						{ 
							this.props.assets.map(n => <CustomTableRow typename={this.typename} entry={n} meta={this.labels} toggleMethod={this.toggleDrawer}/> ) 
						}
					</TableBody>
				</Table>
				<Drawer anchor="right" open={this.state.active} elevation={6} style={styles.drawer}>
					<div tabIndex={0}>
						<Button variant="fab" color="secondary" style={styles.buttonLeft} aria-label="add" onClick={ () => this.toggleDrawer(false, null, "")} >
							<CloseIcon />
						</Button>
						<Divider />
					</div>
					<div style={styles.drawerContent}>
					{	this.renderDrawerContent() }
					</div>
				</Drawer>

				<Button variant="fab" color="secondary" aria-label="add" style={styles.buttonRight} onClick={ () => this.toggleDrawer(true, null, this.typename)} >
					<AddIcon />
				</Button>				
			</Paper>
		)
	}
}

export default AssetTable;