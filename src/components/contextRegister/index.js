import { useState } from 'react';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const RegisForm = styled.form`
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
	margin-bottom: 10px;
	border-radius: 10px;
`;

const Label = styled.label`
	text-align: left;
	padding: 0.25rcm 0;

	margin-left: 10px;
`;

const Input = styled.input`
	margin: 10px;
	padding: 1rcm;
	margin-bottom: 20px;
	border-radius: 5px;
`;

const H2 = styled.h2`
	margin-left: 30%;
`;

function ContextRegister() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = item => {
		item.preventDefault();

		console.log(email);
	};

	return (
		<Container>
			<H2>Register</H2>

			<RegisForm onSubmit={handleSubmit}>
				<Body>
					<Label>User Name</Label>

					<Input
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='enter User Name'
					></Input>
					<Label>Password</Label>
					<Input
						value={pass}
						onChange={a => setPass(a.target.value)}
						placeholder='enter password'
					></Input>
					<Label> Confirm Password</Label>
					<Input
						value={pass}
						onChange={a => setPass(a.target.value)}
						placeholder='confirm password'
					></Input>
					<Button type='submit'>Sign Up</Button>
					<br></br>
					<Label> Already Register?</Label>
					<Button type='submit'>Sign In</Button>
				</Body>
			</RegisForm>
		</Container>
	);
}

export default ContextRegister;
