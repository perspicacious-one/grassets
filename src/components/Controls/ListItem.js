import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import {GetDisplayName, FormatCamel} from '../../utils/string';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { UnlinkButton } from './BaseControls';
import { withStyles } from '@material-ui/core';
import {RelationActionButton} from './RelationButton';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary,
	},
});

export const ActiveRelativeItem = ({data, parentId, dataSource, callback}) => {
	const removeButton = RelationActionButton(UnlinkButton)({
		mutation: dataSource.mutate.removeRelative[dataSource.relativeTypes],
		parentId: parentId,
		childId: data.id,
		callback: callback
	})
	return(
		<ListItem 
		key={data.id}
		role={undefined}
		className={styles.root}
		divider
		button
		>
		<ListItemText primary={GetDisplayName(data)} />
			<ListItemSecondaryAction>
				{
					removeButton
				}
			</ListItemSecondaryAction>
		</ListItem>
	)
}



export const InactiveRelativeItem = ({actionButton, data}) => {

	return(
		<ListItem 
		key={data.id}
		role={undefined}
		divider
		button
		>
			<ListItemText primary={GetDisplayName(data)} />
			<ListItemSecondaryAction>
				{
					actionButton
				}
			</ListItemSecondaryAction>
		</ListItem>
	)
}
