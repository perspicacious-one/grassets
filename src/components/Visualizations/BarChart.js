import React, { Component } from 'react';
import { Query } from 'react-apollo'
import DataMap from '../common/DataSource'
import Grid from '@material-ui/core/Grid';
import Loading from '../common/Loading'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


const styles = {
	center: {
		margin: 'auto',
		padding: '15px'
	},
	gridItemLeft: {
		display: 'flex',
		justifyContent: 'center'
	},
	radioGroup: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
}

export default class SimpleBarChart extends Component  {
	constructor(props) {
		super(props)
		this.isFiltered = this.isFiltered.bind(this)
	}
	isFiltered(value) {
		return value.renewalTerm === this.props.filter
	}
	normalizeData(data) {
		let result = Object.values(data)[0].map(record => {
			return {name: record.name, cost: (record.cost * record.qty), renewalTerm: record.renewalTerm, id: record.id};
		}).filter(this.isFiltered);
		console.log(result)
		return(result)
	}
	render() {
		const data = this.normalizeData(this.props.data)
		const { xAxisKey, barKey } = this.props
			return( 
				<BarChart width={700} height={300} data={data}>
					<CartesianGrid stroke="3 3" />
					<XAxis dataKey={xAxisKey} />
					<YAxis dataKey={barKey} />
					<Tooltip />
					<Legend />
					<Bar dataKey='cost' name={'Per Payment Price'} fill="#7C4DFF" />
				</BarChart>
		)
	}
}