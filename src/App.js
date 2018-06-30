import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home/Home'
import './App.css';
import { theme, ThemeAlternate } from './components/Theme';
import { HardwareTable, SaaSTable, SaaPTable, EmployeeTable } from './components/AssetTable';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';


class App extends Component {
	goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
	}
	
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
			
				<Router>
					<MuiThemeProvider theme={ThemeAlternate}>
					<div>
						<Header auth={this.props.auth}/>
						<main>
							{
								isAuthenticated() && (
									<Grid container 
										spacing={24}
										alignItems={'stretch'}
										direction={'column'}
										justify={'center'} >
											<Grid item xs>
											<Route exact path='/hardware' component={ HardwareTable } />
											<Route exact path='/subscriptions' component={ SaaSTable } />
											<Route exact path='/software' component={ SaaPTable } /> 
											<Route exact path='/employees' component={ EmployeeTable } /> 
										</Grid>
									</Grid>
								)
							}{
								!isAuthenticated() && (
									<Home auth={this.props.auth}/>
								)
							}
						</main>
					</div>
					</MuiThemeProvider>
				</Router>
    );
  }
}

export default App;
