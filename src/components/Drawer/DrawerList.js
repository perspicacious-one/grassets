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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import {InactiveRelativeItem} from './ListItem';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import { Query } from 'react-apollo';

class DrawerList extends React.Component {
	
	render() {
		return(
			<ErrorBoundary>
				 <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
        </Drawer>
			</ErrorBoundary>
		)
	}
}