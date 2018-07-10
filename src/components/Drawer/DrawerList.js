import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Loading from '../common/Loading';
import DataMap from '../common/Mapping';
import { GetDisplayName } from '../../utils/string';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerListItem from './DrawerListItem';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import {InactiveRelativeItem} from './ListItem';
import List from '@material-ui/core/List';
import { QueryContext, FormContext } from '../common/Contexts';
import { Query } from 'react-apollo';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonAddIcon from '@material-ui/icons/PersonAdd'

export default class DrawerList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeList = null,
			open = false
		}
	}

	handleChange = (event, value) => {
		if(!this.state.open) {
			this.setState({ 
				activeList: value,
			});
			this.toggleDrawer(true);
		} else {
			this.toggleDrawer(false)
		}
	};
	
	toggleDrawer = (open) => () => {
    this.setState({ open: open });
	};
	
	render() {
		return(
			<React.Fragment>
				<BottomNavigation onChange={this.toggleDrawer}>
					<BottomNavigationAction label="Employees" value="employee" icon={<PersonAddIcon />} />
				</BottomNavigation>
				<Drawer
							anchor="bottom"
		          open={this.state.open}
		          onClose={this.toggleDrawer(false)}
			        >
							<ErrorBoundary>
								<RelativeQueryList relativeType={this.state.activeList} />
							</ErrorBoundary>
		     </Drawer>
			 </React.Fragment>
		)
	}
}

const RelativeQueryList = (props) => {
	return(
			<Query query={DataMap[props.relativeType].query.allBasic}>
				{({ loading, error, data, refetch }) => {
					if (loading) return (
						<Loading />
						);
					if (error) return `Error! ${error.message}`;
					return( 
						<List>
							{
								Object.values(data)[0].map(record => <DrawerListItem data={record} relativeType={props.relativeType} /> )
							}
						</List>
					)
					}
				}
			</Query>
	)
}
