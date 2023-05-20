import { useState } from 'react';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const Body = styled.div`
	background-color: rgb(227, 218, 204);
	/* width: 30%; */
	display: flex;
	flex-direction: column;
	margin: 0% 30%;
`;
const Button = styled.button`
	border: none;
	background-color: red;
	padding: 10px;
	border-radius: 0.5px;
	cursor: pointer;
	color: green;
	align-self: center;
`;

const Label = styled.label`
	text-align: left;
	padding: 0.25rcm 0;
	margin-bottom: 10px;
`;

const Input = styled.input`
	margin: 10px;
	padding: 1rcm;
	margin-bottom: 20px;
`;

const H2 = styled.h2`
	margin-left: 30%;
`;

function ContentLogin() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = item => {
		item.preventDefault();

		console.log(email);
	};

	return (
		<Container>
			<H2>Login</H2>

			<LoginForm onSubmit={handleSubmit}>
				<Body>
					<Label>email adress</Label>

					<Input
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='enter email address'
					></Input>
					<Label>password</Label>
					<Input
						value={pass}
						onChange={a => setPass(a.target.value)}
						placeholder='enter password'
					></Input>
					<Button type='submit' className='btn btn-primary'>
						Login
					</Button>
				</Body>
			</LoginForm>
		</Container>
	);
}

export default ContentLogin;
