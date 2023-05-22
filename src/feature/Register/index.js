import React from 'react';

import styled from 'styled-components';
import Header from '../../components/header';
import ContentRegister from '../../components/contextRegister';
import Footer from '../../components/footer';

const LoginContainer = styled.div``;

const index = () => {
	return (
		<LoginContainer>
			<Header></Header>
			<ContentRegister></ContentRegister>
			<Footer></Footer>
		</LoginContainer>
	);
};

export default index;
