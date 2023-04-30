import styled from "styled-components";
import Header from "../../components/header";
import ContentLogin from "../../components/contextLogin";
import Footer from "../../components/footer";

const LoginContainer = styled.div``;

function Login() {
  return (
    <LoginContainer>
      <Header></Header>
      <ContentLogin></ContentLogin>
      <Footer></Footer>
    </LoginContainer>
  );
}

export default Login;
