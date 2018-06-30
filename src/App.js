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
	
  render() {
    return (
			
				<Router>
					<MuiThemeProvider theme={ThemeAlternate}>
					<div>
						<Header/>
						<main>
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

						</main>
					</div>
					</MuiThemeProvider>
				</Router>
    );
  }
}

export default App;
