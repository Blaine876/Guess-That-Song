import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GameCardContainer = styled(Link)`
  position: relative;
  display: flex;
  padding: 1rem;
  outline: none;
  border-radius: 5px;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor || "#1ed760"};
  color: white;
  text-decoration: none;
  width: 20rem;
  height: 20rem;
  margin: 1rem;
  &:hover {
    transform: scale(1.02);
  }
`;

const GameTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const GameCardImage = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 5rem;
  height: 5rem;
`;

const GameSubText = styled.p`
  font-size: 1.4rem;
  color: whitesmoke;
  text-align: center;
`;

const GameCard = ({
  color,
  gameTitle,
  gameText,
  gameId,
  onChange,
  checked,
  onClick,
  gameImage,
  backgroundcolor,
  link,
}) => {
  return (
    <GameCardContainer to={link} backgroundcolor={backgroundcolor}>
      <div>
        <GameTitle>{gameTitle}</GameTitle>
        <GameSubText>{gameText}</GameSubText>
      </div>

      <GameCardImage src={gameImage} alt={gameTitle} />
    </GameCardContainer>
  );
};

export default GameCard;
