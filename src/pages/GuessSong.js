import React from "react";
import styled from "styled-components";

import TeamSelect from "../components/TeamSelect";

const Container = styled.div`
  height: 100vh;
  background-color: #151515;
`;

const HeaderText = styled.h1`
  color: whitesmoke;
  text-align: center;
  font-size: 3rem;
`;

const Main = styled.main`
  padding: 2rem;
`;

const RulesSection = styled.section`
  margin-bottom: 2rem;
`;

const SubHeaderText = styled.h2`
  color: whitesmoke;
`;

const RulesText = styled.p`
  font-size: 1.6rem;
`;

const TeamSection = styled.section``;

const GuessSong = () => {
  return (
    <Container>
      <HeaderText>Guess That Song</HeaderText>
      <Main>
        <RulesSection>
          <SubHeaderText>Rules</SubHeaderText>
          <RulesText>
            A song will play for a short amount of time. Teams will have to
            guess which song was being played. You only have 5 seconds to get it
            correct! Goodluck!
          </RulesText>
        </RulesSection>
        <TeamSection>
          <TeamSelect />
        </TeamSection>
      </Main>
    </Container>
  );
};

export default GuessSong;
