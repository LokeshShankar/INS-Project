import React, { Component } from 'react';
import Header from './HeaderComponent';
import AddShowDetails from './AddShowDetails.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddEntries from './AddEntries';
import Graph from './Graph';
import HeaderComponent from './HeaderComponent';
import Login from '../Login/Login';
import './AdminDashboard.css';

class AdminDashboard extends Component {
	render() {
		return (
			<div className='admin-dashboard'>
				<Router>
					<Header />
					<Switch>
						<Route path='/header' component={HeaderComponent} />
						<Route path='/add-show-details' component={AddShowDetails} />
						<Route path='/add-entries' component={AddEntries} />
						<Route path='/view-graph' component={Graph} />
						<Route path='/login' component={Login} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default AdminDashboard;
