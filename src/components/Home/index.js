import React from 'react';
import Paper from '@material-ui/core/Paper';
import DataMap from '../common/Mapping';
import Grid from '@material-ui/core/Grid';
import FilteredChart from '../Visualizations/FilteredChart'
import {SoftwareTotalPieChart} from '../Visualizations/SimplePieChart'
import {SaasExpirationLineChart} from '../Visualizations/SimpleLineChart'
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
		flexGrow: 1,
	},
	center: {
		marginLeft: '50px',
		marginRight: '50px',
		display: 'flex',
		flexWrap: 'wrap',
	},
	paper: {
		margin: '25px',
		height: '400px'
	},
	subTitle: {
		textAlign: 'center',
	}
};
class Home extends React.Component {
  render() {
    return (
			<Grid spacing={40} style={styles.center}>
				<Grid xs={12} style={styles.subTitle}>
					<Typography variant="display1" gutterBottom>
						Overview
					</Typography>
				</Grid>
				<Grid xs={6}>
					<Paper style={styles.paper}>
					<FilteredChart query={DataMap.saas.query.all} title="Price per Payment Period" />
					</Paper>
				</Grid>
				<Grid xs={6}>
					<Paper style={styles.paper}>
					<SoftwareTotalPieChart title="Software Costs" />
					</Paper>
				</Grid>
			</Grid>
    );
  }
}

export default Home;

//<SoftwareTotalPieChart title="Software Costs" />