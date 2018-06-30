import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';


const Loading = (props) => {
	let styles = {
		loading: {
			width: '200px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: '40px auto 40px auto',
		}
	}
	if(props.small) {
		styles.loading.width = '100px'
	}
	return(
		<div style={styles.loading}>
			<CircularProgress color="primary" /> 
		</div>
	)

}

export default Loading;