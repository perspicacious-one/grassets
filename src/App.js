import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import './App.css';
import theme from './components/Theme';
import {HardwareTable} from './components/AssetTable';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
			<Router>
			  <MuiThemeProvider theme={theme}>
				<div>
					<Header />
					<main>
					<Grid container 
						spacing={24}
						alignItems={'stretch'}
            direction={'column'}
            justify={'center'} >
						<Grid item xs>
							<Route exact path='/' component={HardwareTable} />
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
