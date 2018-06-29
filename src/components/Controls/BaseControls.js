import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
export const DeleteButton = (props) => {
	const styles = {
		buttonRight: {
			float: 'right',
			margin: '10px'
		}
	};
	const getStyle = () => {
		!props.style ? (styles.buttonRight) : props.style
	}
	return(
		<Button variant="fab" color="error" aria-label="remove" style={styles.buttonRight} onClick={ (e) => props.onClick(e)} >
			<RemoveIcon />
		</Button>	
	)
}

export const AddButton = (props) => {
	const styles = {
		buttonRight: {
			float: 'right',
			margin: '10px'
		}
	};
	const getStyle = () => {
		!props.style ? (styles.buttonRight) : props.style
	}
	return(
		<Button variant="fab" color="primary" aria-label="add" style={styles.buttonRight} onClick={ (e) => props.onClick(e)} >
			<AddIcon />
		</Button>	
	)
}

export const AddIconButton = (props) => {
	const styles = {
		buttonRight: {
			float: 'right',
			margin: '10px'
		}
	};
	return(
		<IconButton aria-label="add" style={styles.buttonRight} onClick={ (e) => props.onClick(e)} >
			<AddIcon color="primary"/>
		</IconButton>	
	)
}

export const UnlinkButton = (props) => {
	const styles = {
		buttonRight: {
			float: 'right',
			margin: '10px'
		}
	};
	return(
		<Button aria-label="remove" style={styles.buttonRight} onClick={ (e) => props.onClick(e)} >
			unlink
		</Button>	
	)
}