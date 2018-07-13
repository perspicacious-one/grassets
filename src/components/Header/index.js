import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
		flexGrow: 1,
		justifyContent: "space-between"
	},
	title: {
		textDecoration: 'none',
		color: 'white',
	},
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 20,
		marginRight: 20,
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: 'white',
		fontWeight: '600',
		fontSize: '14px',
		letterSpacing: '1px',
	},

	menu: {
		justifyContent: "space-between"
	}
};

function Header(props) {
	const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menu}>
					<Typography variant="title" color="inherit" className={classes.flex}>
					<NavLink exact to='/' className={classes.title}>Assets</NavLink>
					</Typography>
					<NavLink exact to='/hardware' className={classes.menuButton} activeClassName='Header-isActive'>Hardware</NavLink>
					<NavLink exact to='/subscriptions' className={classes.menuButton} activeClassName='Header-isActive'>Subscriptions</NavLink>
					<NavLink exact to='/software' className={classes.menuButton} activeClassName='Header-isActive'>Software</NavLink>
					<NavLink exact to='/employees' className={classes.menuButton} activeClassName='Header-isActive'>Employees</NavLink>

        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
