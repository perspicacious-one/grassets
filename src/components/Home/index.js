import React from 'react';
import Paper from '@material-ui/core/Paper';
import { compose, graphql } from 'react-apollo';
import DataMap from '../common/Mapping';
import Grid from '@material-ui/core/Grid';
import FilteredChart from '../Visualizations/FilteredChart'
import {SaasExpirationLineChart} from '../Visualizations/SimpleLineChart'
import Typography from '@material-ui/core/Typography';
import {fromNow, FormatDate} from '../../utils/date.js';
import WarningIcon from '@material-ui/icons/Warning'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
		padding: '15px'
	}
};
class Home extends React.Component {
  render() {
		const data1 = Object.values(this.props.saasQuery).pop();
    return (
			<Grid style={styles.center}>
				<Grid xs={12} style={styles.subTitle}>
					<Typography variant="display1" gutterBottom>
						Overview
					</Typography>
				</Grid>
				<Grid xs={6}>
					<Paper style={styles.paper}>
						<FilteredChart query={DataMap.saas.query.allBasic} title={"Subscription Costs"} />
					</Paper>
				</Grid>
				<Grid xs={6}>
					<Paper style={styles.paper}>
					<Typography variant="title" gutterBottom style={{marginLeft: '30px', paddingTop: '20px'}}>Expirations</Typography>
					<List>
					{
						data1 && (data1.map(entry => { return(
							<ListItem>
								<ListItemIcon>
									<WarningIcon style={{fill: 'red'}}/>
								</ListItemIcon>
								<ListItemText inset primary={entry.name + ' expires ' + fromNow(entry.expiration)} />
							</ListItem>
						) })	
						)}
					</List>
					</Paper>
				</Grid>
			</Grid>
    );
  }
}
export default compose(
	graphql(DataMap.saas.query.allBasic, {
		name: "saasQuery"
 }),
	graphql(DataMap.saap.query.allBasic, {
		name: "saapQuery"
 })
)(Home);

//<SoftwareTotalPieChart title="Software Costs" />