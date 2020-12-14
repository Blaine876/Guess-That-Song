import React, { useState } from "react";
import styled from "styled-components";

import GameCard from "../components/GameCard";

import songLogo from "../assets/images/songLogo.png";
import artistLogo from "../assets/images/artistLogo.png";
import musicalChairLogo from "../assets/images/musicalChair.svg";

const GameContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
  padding: 2rem;
`;

const GameMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`;

const GameHeaderText = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: whitesmoke;
  margin-bottom: 2rem;
`;

const Games = () => {
  const [gameOption, setGameOption] = useState("guessArtist");

  const handleOptionChange = (e) => {
    console.log(gameOption);
    setGameOption(e.target.value);
  };

  const handleGameSubmit = (e) => {
    e.preventDefault();
    console.log(gameOption);
  };

  return (
    <GameContainer>
      <GameHeaderText>Select a game</GameHeaderText>
      <GameMain>
        <GameCard
          link="/guessSong"
          backgroundcolor="#3458eb"
          gameImage={songLogo}
          checked={gameOption === "guessSong"}
          onChange={handleOptionChange}
          gameTitle="Guess That Song"
          gameText="Test your ear for music!"
          gameId="guessSong"
          onClick={handleGameSubmit}
        />

        <GameCard
          link="/guessArtist"
          backgroundcolor="#ebc934"
          gameImage={artistLogo}
          checked={gameOption === "guessArtist"}
          onChange={handleOptionChange}
          gameTitle="Guess The Artist"
          gameText="You know who you know"
          gameId="guessArtist"
        />

        <GameCard
          link="/musicalChairs"
          gameImage={musicalChairLogo}
          backgroundcolor="#c034eb"
          checked={gameOption === "musicalChairs"}
          onChange={handleOptionChange}
          gameTitle="Musical Chairs"
          gameText="Classic game of musical chairs"
          gameId="musicalChairs"
        />
      </GameMain>
    </GameContainer>
  );
};

export default Games;
