import { compose, Query, Mutation } from 'react-apollo'
import Loading from '../common/Loading'
import React from 'react';
import { GetDisplayName } from '../../utils/string';
import { normalizeResult, getRelationKey, getRelationData } from '../../utils/traverse';
import Chip from '@material-ui/core/Chip';
import DataMap from '../common/DataSource';


export const RelationActionButton = (BaseButton) =>({ mutation, parentId, childId, callback}) => {
		return (
			<Mutation mutation={mutation}>
				{(mutation) => (
						<BaseButton onClick={e => {
							e.preventDefault();
							mutation({variables: {parentId, childId }}).then( () => callback())
						}} />
				)}
			</Mutation>
		);
	}
	
export	const MutationChip = ({ mutation, record, parentId, callback}) => {
		let key = getRelationKey(record);
		let data = record[(key)];
		return (
			<Mutation mutation={mutation}>
			{
				(mutation) => (
					<Chip key={data.id}
						label={GetDisplayName(data)}	
						onDelete={ (e) => {
							e.preventDefault(); 
							mutation({variables: {parentId, childId: data.id}}).then(callback())
							} } />
				)
			}
			</Mutation>
		);
	}



export function WithQueryMutationChip({context, mutation, id}) {
	let query = DataMap[(context)].query.byId;
	try{
		return (
			<Query query={query} variables={{ id }}>
				{({ loading, error, data, refetch }) => {
					if (loading) return ( <Loading small/>	);
					if (error) return `Error! ${error.message}`;
					return( 
						<MutationChip parentId={id} record={Object.values(data)[0]} mutation={mutation} callback={this.props.callback}/>
					)
				}
			}
			</Query>
		);
	}
	catch(e) {
		return (<small>{e.message}</small>)
	}

}