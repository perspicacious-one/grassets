import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';


const styles = {
	loading: {
		width: '200px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '40px auto 40px auto',
	}
}
const Loading = () => {
	return(
		<div style={styles.loading}>
			<CircularProgress color="primary" /> 
		</div>
	)

}

export default Loading;