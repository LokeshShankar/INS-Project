import React from 'react';
import './Login.css';

const Input = ({ id, type, label, disabled }) => (
	<input
		className='form-group__input'
		type={type}
		id={id}
		placeholder={label}
		disabled={disabled}
	/>
);

export default Input;
