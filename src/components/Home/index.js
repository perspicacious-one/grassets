import React from 'react';
import Paper from '@material-ui/core/Paper';
import { compose, graphql } from 'react-apollo';
import DataMap from '../common/Mapping';
import Grid from '@material-ui/core/Grid';
import FilteredChart from '../Visualizations/FilteredChart'
import Typography from '@material-ui/core/Typography';
import {isWithinDays, getWordsTillExpire} from '../../utils/date.js';
import WarningIcon from '@material-ui/icons/Warning'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';


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
  state = {
	  days: 30
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
		const data1 = Object.values(this.props.saasQuery).pop();
		const expiring = data1 && data1.filter(record => isWithinDays(record.expiration, this.state.days))
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
					<Grid container style={{maxWidth: '600px', alignItems: 'flex-start'}} spacing={24}>
						<Grid xs={9} >
							<Typography variant="title" gutterBottom style={{marginLeft: '30px', paddingTop: '20px'}}>Expirations</Typography>
						</Grid>
						<Grid xs={3}>
							<TextField
								id="days"
								label="Max days"
								value={this.state.days}
								onChange={this.handleChange('days')}
								type="number"
								InputLabelProps={{
									shrink: true,
								}}
								margin="normal"
							/>
						</Grid>
					</Grid>
					<List>
					{
						expiring && (expiring.map(entry => { return(
							<ListItem>
								<ListItemIcon>
									<WarningIcon style={{fill: 'red'}}/>
								</ListItemIcon>
								<ListItemText inset primary={entry.name + ' expires ' + getWordsTillExpire(entry.expiration)} />
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