import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Gallery from '../src/components/Gallery';
import Detail from '../src/components/Detail';
// import DataContextProvider from './contexts/DataContext';


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
					<Switch>
						<Route path="/" exact component={Gallery} />
						<Route path="/:id" component={Detail} />
					</Switch>
				<Footer />
			</React.Fragment>
		)
	}
}

export default App;
