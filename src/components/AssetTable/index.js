import React from 'react';
import AssetTable from './AssetTable.js';
import { Query } from 'react-apollo'
import DataMap from '../common/Mapping';
import Loading from '../common/Loading';


export const HardwareTable = () => (
		<Query query={DataMap.hardware.query.allBasic} variables={{first:5}}>
			{({ loading, error, data, refetch }) => {
				if (loading) return ( <Loading />	);
				if (error) return `Error! ${error.message}`;
				return( 
					<AssetTable assets={data.allHardwares} typename={"Hardware"} displayName={"Hardware"} refresh={() => refetch()}/>
				)
				}
			}
		</Query>
)

export const SaaSTable = () => (
	<Query query={DataMap.saas.query.allBasic} variables={{first:5}}>
		{({ loading, error, data, refetch }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allSaases} typename={"SaaS"} displayName={"Subscriptions"} refresh={() => refetch()}/>
			)
			}
		}
	</Query>
)
export const SaaPTable = () => (
	<Query query={DataMap.saap.query.allBasic} variables={{first:5}}>
		{({ loading, error, data, refetch }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allSaaPs} typename={"SaaP"} displayName={"Software"} refresh={() => refetch()}/>
			)
			}
		}
	</Query>
)
export const EmployeeTable = () => (
	<Query query={DataMap.employee.query.allBasic} variables={{first:5}}>
		{({ loading, error, data, refetch }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allEmployees} typename={"Employee"} displayName={"Employee"} refresh={() => refetch()}/>
			)
			}
		}
	</Query>
)