import React, { Component } from 'react';
import Input from './Input';
import './Login.css';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<div className='form-block__input-wrapper'>
					<div className='form-group form-group--login'>
						<Input
							type='text'
							id='username'
							label='user name'
							disabled={this.props.mode === 'signup'}
						/>
						<Input
							type='password'
							id='password'
							label='password'
							disabled={this.props.mode === 'signup'}
						/>
					</div>
					<div className='form-group form-group--signup'>
						<Input
							type='text'
							id='fullname'
							label='Full Name'
							disabled={this.props.mode === 'login'}
						/>
						<Input
							type='email'
							id='email'
							label='Email'
							disabled={this.props.mode === 'login'}
						/>
						<Input
							type='password'
							id='createpassword'
							label='Password'
							disabled={this.props.mode === 'login'}
						/>
						<Input
							type='password'
							id='repeatpassword'
							label='Confirm Password'
							disabled={this.props.mode === 'login'}
						/>
					</div>
				</div>
				<Link to='/admin'>
					<button
						className='button button--primary full-width mt-3'
						type='submit'
					>
						{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}
					</button>
				</Link>
			</form>
		);
	}
}

export default LoginForm;
