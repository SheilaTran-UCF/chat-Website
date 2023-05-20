import styled from 'styled-components';

const FooterP = styled.footer`
	background-color: #141317;
	width: 100%;
	height: 50;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const P = styled.p`
	color: white;
	text-align: center;
	padding: 15px 0;
	font-size: 12px;
`;

function Footer() {
	return (
		<FooterP>
			<P>Vhalo</P>
		</FooterP>
	);
}

export default Footer;
