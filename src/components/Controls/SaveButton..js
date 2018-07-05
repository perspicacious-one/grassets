import Button from '@material-ui/core/Button';
import React from 'react';
import { graphql, compose, Mutation } from 'react-apollo';
import SaveIcon from '@material-ui/icons/Save';
import DataMap from '../common/Mapping';
import QueryContext from '../common/QueryContext';

function DeleteButton(props) {
	return(
		<QueryContext.Consumer>
		{	context => (
			context && (
				<Mutation mutation={DataMap[context.typeName].mutate.update} variables={{ id: props.id }}>
			{(mutateCreate, {data}) => (
				<Button variant="fab" aria-label="save" color={'primary'} style={{float: 'left'}} onClick={ (e) => {
					e.preventDefault();
					mutateCreate().then( () => context.refetch );
				}}>
					<DeleteIcon/>
				</Button>	
			)}
			</Mutation>	
			)
		)}
		</QueryContext.Consumer>
	)
}
export default DeleteButton