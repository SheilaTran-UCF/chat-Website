import { useState } from 'react';
import React from 'react';

import './style.css';

function ContentLogin() {
	const [email, setEmail] = useState('email');
	const [pass, setPass] = useState('password');

	const handleSubmit = item => {
		item.preventDefault();

		console.log(email);
	};

	return (
		<div className='auth-form-container'>
			<h2>Login</h2>

			<form className='login-form' onSubmit={handleSubmit}>
				<div className='body'>
					<label className='email'>email adress</label>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
					></input>
					<label className='pass'>password</label>
					<input
						value={pass}
						onChange={a => setPass(a.target.value)}
					></input>
					<button type='submit' className='btn btn-primary'>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContentLogin;
