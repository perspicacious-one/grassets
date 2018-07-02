import React, { Component } from 'react';
import { Query, compose, graphql } from 'react-apollo'
import DataMap from '../common/DataSource'
import Grid from '@material-ui/core/Grid';
import Loading from '../common/Loading'
import {PieChart, Pie, Legend, LabelList, Tooltip} from 'recharts';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
		const data1 = Object.values(this.props.saasQuery).pop()
		const data2 = Object.values(this.props.saapQuery).pop()
		return( 
			<Grid	container spacing={12} style={styles.center}>
				<Grid item xs={6} style={styles.gridItemCenter}>
					<Typography variant="subheading" gutterBottom>Subscriptions</Typography>
				</Grid>
				<Grid item xs={6} style={styles.gridItemCenter}>
				<Typography variant="subheading" gutterBottom>Desktop Apps</Typography>
				</Grid>
				<Grid item xs={6} style={styles.gridItemCenter}>
					<PieChart width={300} height={300}>
						<Pie data={data1} dataKey={'cost'} innerRadius={40} outerRadius={80} fill="#7C4DFF" label />
						<Tooltip/>
					</PieChart>
				</Grid>
				<Grid item xs={6} style={styles.gridItemCenter}>
					<PieChart width={300} height={300}>
						<Pie data={data2} dataKey={'cost'} innerRadius={40} outerRadius={80} fill="#7C4DFF" label />
						<Tooltip/>
					</PieChart>
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