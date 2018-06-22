import React from 'react';
import AssetTable from './AssetTable.js';
import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo'
import { GET_HARDWARE, GET_SAASES } from '../graphql/ListQueries';
import { ADD_SAAS } from '../graphql/saasMutations';

export const HardwareTable = () => (
		<Query query={GET_HARDWARE}>
			{({ loading, error, data }) => {
				if (loading) return "Loading...";
				if (error) return `Error! ${error.message}`;
				console.log(data);
				return( 
					<AssetTable assets={data.allHardwares} />
				)
				}
			}
		</Query>
)

export const SaaSTable = () => (
	<Query query={GET_SAASES}>
		{({ loading, error, data }) => {
			if (loading) return "Loading...";
			if (error) return `Error! ${error.message}`;
			return( 
				<AssetTable assets={data.allSaases} mutations={ADD_SAAS}/>
			)
			}
		}
	</Query>
)
