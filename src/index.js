import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './contexts/DataContext'
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
		<DataContextProvider>
			<Router>
				<App />
			</Router>
		</DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
