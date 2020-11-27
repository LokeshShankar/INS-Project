import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import './Login.css';

class Login extends Component {
	render() {
		const mode = 'login';
		return (
			<div className='login'>
				<LoginComponent
					mode={mode}
					onSubmit={function () {
						console.log('submit');
					}}
				/>
			</div>
		);
	}
}

export default Login;
