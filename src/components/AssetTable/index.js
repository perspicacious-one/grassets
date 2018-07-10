import React from 'react';
import AssetTable from './AssetTable.js';
import { Query } from 'react-apollo'
import DataMap from '../common/Mapping';
import Loading from '../common/Loading';
import {QueryContext} from '../common/Contexts';

export const HardwareTable = () => (
		<Query query={DataMap.hardware.query.allBasic}>
			{({ loading, error, data, refetch }) => {
				if (loading) return ( <Loading />	);
				if (error) return `Error! ${error.message}`;
				return(
					<QueryContext.Provider value={{
						refetch: () => refetch(),
						typeName: 'hardware'
					}}>
						<AssetTable assets={data.allHardwares} typename={"Hardware"} displayName={"Hardware"} refresh={() => refetch()}/>
					</QueryContext.Provider>
				)
				}
			}
		</Query>
)

export const SaaSTable = () => (
	<Query query={DataMap.saas.query.allBasic}>
		{({ loading, error, data, refetch }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<QueryContext.Provider value={{
						refetch: () => refetch(),
						typeName: 'saas'
					}}>
					<AssetTable assets={data.allSaases} typename={"SaaS"} displayName={"Subscriptions"} refresh={() => refetch()}/>
				</QueryContext.Provider>
			)
			}
		}
	</Query>
)
export const SaaPTable = () => (
	<Query query={DataMap.saap.query.allBasic}>
		{({ loading, error, data, refetch }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<QueryContext.Provider value={{
						refetch: () => refetch(),
						typeName: 'saap'
					}}>
					<AssetTable assets={data.allSaaPs} typename={"SaaP"} displayName={"Software"} refresh={() => refetch()}/>
				</QueryContext.Provider>
			)
			}
		}
	</Query>
)
export const EmployeeTable = () => (
	<Query query={DataMap.employee.query.allBasic}>
		{({ loading, error, data, refetch }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<QueryContext.Provider value={{
						refetch: () => refetch(),
						typeName: 'employee'
					}}>
					<AssetTable assets={data.allEmployees} typename={"Employee"} displayName={"Employee"} refresh={() => refetch()}/>
				</QueryContext.Provider>
			)
			}
		}
	</Query>
)