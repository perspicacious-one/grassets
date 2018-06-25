import React from 'react';
import AssetTable from './AssetTable.js';
import { Query } from 'react-apollo'
import { GET_HARDWARES, GET_SAASES_BASIC, GET_SAAPS_BASIC } from '../graphql/ListQueries';
import Loading from '../common/Loading';

export const HardwareTable = () => (
		<Query query={GET_HARDWARES}>
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
	<Query query={GET_SAASES_BASIC}>
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
	<Query query={GET_SAAPS_BASIC}>
		{({ loading, error, data }) => {
			if (loading) return (
				<Loading />
				);
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allSaaPs} typename={"SaaP"} displayName={"Softare"}/>
			)
			}
		}
	</Query>
)
