import { QueryContext, FormContext } from '../common/Contexts';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import {GetDisplayName} from '../../utils/string';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';


const DrawerListItem = (props) => {

	function renderButton(outerContext, innerContext) {
		if(!outerType || !innerType) { return null}
		return(
			<ListItemSecondaryAction>
				<Mutation mutation={DataMap[outerContext.typeName].mutate.addRelative[props.relativeType]} variables={{ id: innerContext.state.id }}>
				{(mutateAddRelative, {data}) => (
					<Button variant="fab" color="secondary" aria-label="delete" style={{float: 'right'}} 
					onClick={ (e) => {
						e.preventDefault();
						mutateAddRelative().then( innerContext.onChange(e, props.relativeType) );
					}}>
						<AddIcon color="primary"/>
					</Button>	
				)}
				</Mutation>	
			</ListItemSecondaryAction>
		)
	}
	return(
		<QueryContext.Consumer>
		{ queryContext =>
			<FormContext.Consumer>
				{ formContext =>
					<ListItem key={data.id} role={undefined} divider dense button>
						<ListItemText primary={GetDisplayName(data)} />
						{ renderButton(queryContext, formContext) }
					</ListItem>
				}
			</FormContext.Consumer>
		}
		</QueryContext.Consumer>
	)
}

export default DrawerListItem