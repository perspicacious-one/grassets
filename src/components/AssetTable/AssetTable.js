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
import Divider from '@material-ui/core/Divider';
import DataMap from '../common/Mapping';
import {DrawerContext} from '../common/Contexts';
import FormProvider from '../Forms';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
		flexShrink: '1',
		padding: '0',
		margin: '0',
	},
	drawerContent: {
		padding: '0 28px 0 28px',
		margin: '0',
		display: 'flex',
		flexWrap: 'wrap',
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
			selection: "",
			subType: ""
		}
		this.typename = this.props.typename;
		this.labels = Object.keys(this.props.assets[0]).filter( label => !["__typename", "id"].includes(label) );
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer = (open = false, id = null, type) => {
    this.setState({
			active: open,
			selection: id,
			subType: type
		});
		this.props.refresh()
	};

	render() {

		return(
			<Paper style={styles.paper}>
				<div style={styles.heading}>
				<Typography variant="display1" gutterBottom>
					{this.props.displayName}
				</Typography>
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
					<div tabIndex={0} style={{padding: '10px'}}>
						<IconButton  aria-label="add" onClick={ () => this.toggleDrawer(false, null, "")} >
							<CloseIcon />
						</IconButton>
					</div>
					<Divider />
						<DrawerContext.Provider value={{
							toggle: this.toggleDrawer,
							state: this.state
						}}>
							<FormProvider />
						</DrawerContext.Provider>
				</Drawer>
				<Button variant="fab" color="secondary" aria-label="add" style={styles.buttonRight} onClick={ () => this.toggleDrawer(true, null, this.typename)} >
					<AddIcon />
				</Button>				
			</Paper>
		)
	}
}

export default AssetTable;