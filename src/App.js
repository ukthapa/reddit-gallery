import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Gallery from '../src/components/Gallery';
import './App.css';



class App extends Component {
	render() {
		return (
			<Grid container direction="column">
				<Grid item><Header /></Grid>
				<Grid item><Gallery /></Grid>
				<Grid item><Footer /></Grid>
			</Grid>
		)
	}
}


export default App;
