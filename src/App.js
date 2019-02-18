import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize-css';
import Home from './pages/Home';
import store from './state/store';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
