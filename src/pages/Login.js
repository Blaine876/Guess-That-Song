import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

import { loginUrl } from "../utils/spotify";

const LoginContainer = styled.div`
  height: 100vh;
  /* background-image: linear-gradient(to bottom, #151515, #000000);
  background-repeat: repeat; */
  background-color: #151515;
`;

const LoginMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const LogoText = styled.h1`
  color: #1a3133;
  font-size: 3.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: 600;
`;

const LogoImage = styled.img`
  margin-top: 3rem;
  height: 30rem;
`;

const LoginButtonDiv = styled.div`
  margin-top: 3rem;
`;

const LoginLink = styled.a`
  border-radius: 1rem;
  border: none;
  outline: none;
  background-color: #1ed760;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: none;
  &:hover {
    background-color: #22f66e;
    transition: 0.2s;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginMain>
        <LogoImage src={logo} alt="logo" />
        <LogoText>Spotify Games</LogoText>
        <LoginButtonDiv>
          <LoginLink href={loginUrl}>Log in with Spotify</LoginLink>
        </LoginButtonDiv>
      </LoginMain>
    </LoginContainer>
  );
};

export default Login;
