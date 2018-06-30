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
	
