import React, { Component } from 'react';
import { Query, compose, graphql } from 'react-apollo'
import DataMap from '../common/Mapping';
import Grid from '@material-ui/core/Grid';
import {PieChart, Pie, Legend, LabelList, Tooltip, ResponsiveContainer} from 'recharts';
import Typography from '@material-ui/core/Typography';

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
		const data1 = Object.values(this.props.saasQuery).pop();
		return( 
			<Grid	container spacing={12} style={styles.center}>
				<Grid item xs={12} style={styles.gridItemCenter}>
					<Typography variant="subheading" gutterBottom>Subscriptions</Typography>
				</Grid>
				<Grid item xs={12} style={styles.gridItemCenter}>
				<ResponsiveContainer width="90%" height="80%">
					<PieChart>
						<Pie data={data1} dataKey={'cost'} innerRadius={40} outerRadius={80} fill="#FF6E40" label />
						<Tooltip/>
					</PieChart>
				</ResponsiveContainer>
				</Grid>
			</Grid>
		)
	}
}

export const SoftwareTotalPieChart = compose(
	graphql(DataMap.saas.query.allBasic, {
		name: "saasQuery"
 }),
	graphql(DataMap.saap.query.allBasic, {
		name: "saapQuery"
 })
)(SimplePieChart);