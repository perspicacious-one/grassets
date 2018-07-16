import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import Loading from '../common/Loading';
import DataMap from '../common/Mapping';
import ErrorBoundary from '../common/ErrorBoundary';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DrawerListItem from './DrawerListItem';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ComputerIcon from '@material-ui/icons/Computer';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff'
import List from '@material-ui/core/List';
import { QueryContext, FormContext, RelativeContext } from '../common/Contexts';
import { Query } from 'react-apollo';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';

const styles = {
	bottomNav: {
		alignSelf: 'flex-end',
		width: '100%',
		margin: '0',
    padding: '0',
    bottom: '0',
    right: '0',
    position: "fixed",
	},
	topNav: {
		alignSelf: 'flex-start',
		width: '100%',
		margin: '0',
    padding: '0',
	},
	paper: {
		alignSelf: 'flex-end',
		height: '60',
		width: '100%',
		padding: '0',
		margin: '0'
	},
	drawer: {
		display: 'flex',

		alignItems: 'flex-start',
		padding: '0',
	},
	list: {
		padding: '20px',
		width: '100%',
		padding: '0',

	},
	header: {
		display: 'block',
		width: '100%',
		maxHeight: '50px',
		padding: '0',
		backgroundColor: '#536DFE',
		textAlign: 'center',
		cursor: 'pointer'
	}
}

export default class DrawerList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeList: null,
			open: false
		}
		this.toggleDrawer = this.toggleDrawer.bind(this)
	}

	handleChange = (value, event) => {
		event.preventDefault();
		if(!this.state.open) {
			this.setState({ 
				activeList: value,
			});
			this.toggleDrawer();
		} else {
			this.toggleDrawer()
		}
	};
	
	toggleDrawer = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}));
	};
	
	renderNavActions(data) {
		let keys = Object.keys(data).filter(key => { ['user', 'employee', 'saas', 'software', 'saap', 'hardware'].includes(key)} )
		return Object.keys(data).map(key => {
			switch(key) {
				case 'user':
					return(<BottomNavigationAction showLabel label="Employees" onClick={(e) => this.handleChange("employee", e)} icon={<PersonAddIcon />} />)
				case 'employee':
					return(<BottomNavigationAction showLabel label="Employees" onClick={(e) => this.handleChange("employee", e)} icon={<PersonAddIcon />} />)
				case 'saas':
					return(<BottomNavigationAction showLabel label="Subscriptions" onClick={(e) => this.handleChange("saas", e)} icon={<CloudIcon />} />)
				case 'software':
					return(<BottomNavigationAction showLabel label="Software" onClick={(e) => this.handleChange("software", e)} icon={<CloudOffIcon />} />)
				case 'saap':
					return(<BottomNavigationAction showLabel label="Software" onClick={(e) => this.handleChange("saap", e)} icon={<CloudOffIcon />} />)
				case 'hardware':
					return(<BottomNavigationAction showLabel label="Hardware" onClick={(e) => this.handleChange("hardware", e)} icon={<ComputerIcon />} />)
				default:
				 return null;
			}
		})
	}
	render() {
		return(
			<React.Fragment>
			<Paper style={styles.paper}  elevation={4} style={styles.bottomNav}>
				{!this.state.open &&
					<BottomNavigation value={this.state.activeList} showLabels>
						<FormContext.Consumer>
						{ context => 
								this.renderNavActions(context.state)
						}
						</FormContext.Consumer>
					</BottomNavigation>
				}
			</Paper>
				<Drawer
					anchor="bottom"
          open={this.state.open}
          onClose={this.toggleDrawer}
					ModalProps={{hideBackdrop: true}}
					PaperProps={{ style: styles.drawer}}
		      >
					<RelativeContext.Provider value={{ toggle: this.toggleDrawer }}>
						<Paper elevation={4} style={styles.topNav}>
							<BottomNavigation value={this.state.activeList} showLabels>
								<FormContext.Consumer>
								{ context => 
										this.renderNavActions(context.state)
								}
								</FormContext.Consumer>
							</BottomNavigation>
							<Grid style={styles.header} onClick={this.toggleDrawer} >
								<ExpandMoreIcon style={{fill: 'white', width: '1.5em', height: '1.5em'}}/>
							</Grid>
						</Paper>
						<Grid container spacing={12}>
							<Grid item xs={12}>
								<RelativeQueryList relativeType={this.state.activeList}/>
							</Grid>
						</Grid>
					</RelativeContext.Provider>
		     </Drawer>

			 </React.Fragment>
		)
	}
}

class RelativeQueryList extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			query: null
		}
	}
	componentDidMount() {
		let doc = DataMap[this.props.relativeType].query.allBasic
		if(doc) {
			this.setState({ query: doc })
		}
	}
	render() {
		const { query } = this.state
		return(
			<ErrorBoundary>
				{ query &&
					<Query query={query}>
					{({ loading, error, data, refetch }) => {
						if (loading) return (
							<Loading />
							);
						if (error) return `Error! ${error.message}`;
						return( 
							<List style={styles.list}>
								{
									Object.values(data)[0].map(record => <DrawerListItem data={record} relativeType={this.props.relativeType} /> )
								}
							</List>
						)
						}
					}
				</Query>

				}

			</ErrorBoundary>
		)
	}
}
