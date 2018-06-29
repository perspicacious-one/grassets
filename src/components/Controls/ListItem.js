import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import {GetDisplayName, FormatCamel} from '../../utils/string';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { UnlinkButton } from './BaseControls';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary,
	},
});


export const InactiveRelativeItem = ({data, handleLink}) => {
	const styles = {
		buttonRight: {
			float: 'right',
			margin: '10px'
		}
	};
	return(
		<ListItem 
		key={data.id}
		role={undefined}
		divider
		button
		>
			<ListItemText primary={GetDisplayName(data)} />
			<ListItemSecondaryAction>
				<IconButton aria-label="add" style={styles.buttonRight} onClick={ (e) => handleLink(data, e)} >
					<AddIcon color="primary"/>
				</IconButton>	
			</ListItemSecondaryAction>
		</ListItem>
	)
}
