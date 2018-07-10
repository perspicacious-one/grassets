import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'

class FormDrawer extends React.Component {
	render() {
		return(
			<Drawer anchor="right" open={this.state.active} elevation={6} style={styles.drawer}>
				<div tabIndex={0}>
					<Button variant="fab" color="secondary" style={styles.buttonLeft} aria-label="add" >
						<CloseIcon />
					</Button>
					<Divider />
				</div>
				<div style={styles.drawerContent}>
						{	this.renderDrawerContent() }
				</div>
			</Drawer>
		)
	}
}
