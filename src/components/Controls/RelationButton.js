import { compose, graphql, Mutation } from 'react-apollo'
import React from 'react';


const RelationActionButton = (BaseButton) =>({ mutation, parentId, childId, callback }) => {
	return (
    <Mutation mutation={mutation} onCompleted={ () => callback}>
      {(mutation, { data }) => (
					<BaseButton onClick={e => {
						e.preventDefault();
						mutation({variables: {parentId, childId }})
					}} />
      )}
    </Mutation>
  );
}

export default RelationActionButton;