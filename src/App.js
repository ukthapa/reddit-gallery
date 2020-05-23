import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Gallery from '../src/components/Gallery';
import Box from '@material-ui/core/Box';
import './App.css';

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};

class App extends Component {
	render() {
		return (
			<Grid container direction="column">
				<Grid item><Header /></Grid>
				<Box {...bodyBgColor} pt={14}  pb={6}>
					<Container width={1}>
						<Grid item container  spacing={2}>
							<Grid item xs={4}>
									<Gallery />
							</Grid>
							<Grid item xs={4}>
									<Gallery />
							</Grid>
							<Grid item xs={4}>
									<Gallery />
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Grid item><Footer /></Grid>
			</Grid>
		)
	}
}


export default App;
