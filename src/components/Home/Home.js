import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = {
  card: {
		textAlign: 'center',
		display: 'block',
		margin: 'auto',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  cardAction: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardButton: {
	}
};
class Home extends React.Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
					<div style={{ width: '500px', margin: 'auto'}}>
						{
							isAuthenticated() && (
									<h4>
										You are logged in!
									</h4>
								)
						}
						{
							!isAuthenticated() && (
								<Card raised style={styles.card}>
									<CardContent>
										<h4> You are not logged in! </h4>
										<h5> Please Log In to continue. </h5>
										<CardActions style={styles.cardAction}>
											<Button
													id="qsLoginBtn"
													variant="contained" 
													color="secondary"
													onClick={this.login.bind(this)}
												>
												Log In
											</Button>
										</CardActions>
									</CardContent>
								</Card>
								)
						}
				</div>
    );
  }
}

export default Home;