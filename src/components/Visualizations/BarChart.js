import React, { Component } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer  } from 'recharts';


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
				<ResponsiveContainer height="80%" aspect={4, 3}>
				<BarChart data={data}>
					<CartesianGrid stroke="3 3" />
					<XAxis dataKey={xAxisKey} />
					<YAxis dataKey={barKey} />
					<Tooltip />
					<Legend />
					<Bar dataKey='cost' name={'Per Payment Price'} fill="#FF6E40" />
				</BarChart>
				</ResponsiveContainer>
		)
	}
}