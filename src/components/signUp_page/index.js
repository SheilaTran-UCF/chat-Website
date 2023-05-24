import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const Button = styled.button`
	border: none;
	background-color: red;
	padding: 10px;
	border-radius: 0.5px;
	cursor: pointer;
	color: green;
	align-self: center;
	border-radius: 5px;
	margin-bottom: 10px;
`;
const Label = styled.label`
	text-align: left;
	padding: 0.25rcm 0;
	/* margin-bottom: 10px; */
	margin-left: 10px;
`;

function SignUp_page() {
	const navigate = useNavigate();
	const handleClick = () => navigate(-1);

	return (
		<Container>
			<Label> Register Page</Label>
			<Button type='button' onClick={handleClick}>
				go back
			</Button>
		</Container>
	);
}

export default SignUp_page;
