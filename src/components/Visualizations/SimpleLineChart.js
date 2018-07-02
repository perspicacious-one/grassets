import React, { Component } from 'react';
import { Query, compose, graphql } from 'react-apollo'
import DataMap from '../common/DataSource'
import Grid from '@material-ui/core/Grid';
import {LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import Typography from '@material-ui/core/Typography';
import {FormatDate} from '../../utils/string'
const styles = {
	center: {
		margin: 'auto',
		padding: '15px',
		display: 'flex',
		flexGrow: '1'
	},
	gridItemCenter: {
		display: 'flex',
		justifyContent: 'center'
	},
	labels: {
		stroke: '#6200EA'
	}
}

class SimplePieChart extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const data = Object.values(this.props.saasQuery).pop();
		return( 
			<Grid	container spacing={12} style={styles.center}>
				<Grid item xs={12} style={styles.gridItemCenter}>
					<Typography variant="subheading" gutterBottom>Subscriptions</Typography>
				</Grid>
				<Grid item xs={12} style={styles.gridItemCenter}>
				<LineChart width={600} height={300} data={data}
						margin={{ top: 5, right: 20, left: 20, bottom: 0 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="expiration" />
						<YAxis dataKey="cost"/>
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="name" stroke="#6200EA" />
					</LineChart>
				</Grid>
			</Grid>
		)
	}
}

export const SaasExpirationLineChart = compose(
	graphql(DataMap.saas.query.allBasic, {
		name: "saasQuery"
 }),
)(SimplePieChart);