import React from 'react';
import AssetTable from './AssetTable.js';
import { Query } from 'react-apollo'
import { GET_HARDWARES, GET_SAASES_BASIC, GET_SAAPS_BASIC, GET_EMPLOYEES_BASIC } from '../Queries/ListQueries';
import Loading from '../common/Loading';


export const HardwareTable = () => (
		<Query query={GET_HARDWARES} variables={{first:5}}>
			{({ loading, error, data }) => {
				if (loading) return ( <Loading />	);
				if (error) return `Error! ${error.message}`;
				return( 
					<AssetTable assets={data.allHardwares} typename={"Hardware"} displayName={"Hardware"}/>
				)
				}
			}
		</Query>
)

export const SaaSTable = () => (
	<Query query={GET_SAASES_BASIC} variables={{first:5}}>
		{({ loading, error, data }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allSaases} typename={"SaaS"} displayName={"Subscriptions"}/>
			)
			}
		}
	</Query>
)
export const SaaPTable = () => (
	<Query query={GET_SAAPS_BASIC} variables={{first:5}}>
		{({ loading, error, data }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allSaaPs} typename={"SaaP"} displayName={"Software"}/>
			)
			}
		}
	</Query>
)
export const EmployeeTable = () => (
	<Query query={GET_EMPLOYEES_BASIC} variables={{first:5}}>
		{({ loading, error, data }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allEmployees} typename={"Employee"} displayName={"Employee"}/>
			)
			}
		}
	</Query>
)