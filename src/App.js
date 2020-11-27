import React from 'react';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/Admin/HeaderComponent';
import AddShowDetails from './Components/Admin/AddShowDetails.js';
import AddEntries from './Components/Admin/AddEntries';
import Graph from './Components/Admin/Graph';
import Login from './Components/Login/Login';

function App() {
	return (
		<div className='App'>
			<AdminDashboard />
		</div>
	);
}

export default App;

// <Router>
// 	<Login />
// 	<Switch>
// 		<Route path='/login' component={Login} />
// 		<Route path='/admin' component={AdminDashboard} />
// 	</Switch>
// </Router>
