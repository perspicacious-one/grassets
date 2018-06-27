import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';

export const DeleteButton = (props) => {
	const styles = {
		buttonRight: {
			float: 'right'
		}
	};
	const getStyle = () => {
		!props.style ? (styles.buttonRight) : props.style
	}
	return(
		<Button variant="fab" color="red" aria-label="add" style={getStyle} onClick={ () => props.onClick()} >
			<RemoveIcon />
		</Button>	
	)
}

export const AddButton = (props) => {
	const styles = {
		buttonRight: {
			float: 'right'
		}
	};
	const getStyle = () => {
		!props.style ? (styles.buttonRight) : props.style
	}
	return(
		<Button variant="contained" color="red" aria-label="add" style={getStyle} onClick={ () => props.onClick()} >
			Add
		</Button>	
	)
}