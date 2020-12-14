import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

import axios from "axios";

import { searchArtist } from "../utils/spotify";

const TeamSelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TeamSelectButton = styled.button`
  border-radius: 1rem;
  background-color: #1ed760;
  color: white;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  &:hover {
    background-color: #22f66e;
    transition: 0.2s;
  }
`;

const TeamsSelectText = styled.p`
  font-size: 1.6rem;
  color: smoke;
  padding: 1rem;
`;

const TeamCount = styled.p`
  margin-left: 1rem;
  color: whitesmoke;
  font-size: 2rem;
`;

const TeamInputDiv = styled.div`
  margin-bottom: 1rem;
  width: 30rem;
`;

const TeamInputField = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 1rem;
  border: 2px solid lightgray;
  outline: none;
  &:focus {
    border: 2px solid #1ed760;
  }
`;

const TeamNameSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const BrowseArtistDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  && {
    background-color: #1ed760;
    font-size: 24px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }
`;
const ArtistInputField = styled.input`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 3.5px 2rem;
  border: none;
  outline: none;
`;

const TeamSelect = () => {
  const [teamCount, setTeamCount] = useState(1);
  const [artist, setArtist] = useState("");

  const incrementTeamCount = () => {
    setTeamCount(teamCount + 1);
  };

  const decrementTeamCount = () => {
    if (teamCount > 1) {
      setTeamCount(teamCount - 1);
    }
  };

  const renderInputs = (value) => {
    const inputs = [];
    for (let i = 0; i < value; i++) {
      inputs.push(
        <TeamInputDiv>
          <TeamInputField type="text" name="teamName" />
        </TeamInputDiv>
      );
    }
    return inputs;
  };

  const handleAristSearch = async () => {
    console.log(`Searching results for ${artist}`);
    const searchUri = "https://api.spotify.com/v1/search";
    const searchArtist = await axios.get(
      `${searchUri}?q=${artist}%2Cartist&market=US&limit=10&offset=5`
    );

    console.log(searchArtist);
  };

  return (
    <div>
      <h1>How many teams?</h1>

      <TeamSelectDiv>
        <TeamSelectButton onClick={decrementTeamCount}>-</TeamSelectButton>
        <TeamsSelectText>Teams</TeamsSelectText>
        <TeamSelectButton onClick={incrementTeamCount}>+</TeamSelectButton>
        <TeamCount>{teamCount}</TeamCount>
      </TeamSelectDiv>

      <TeamNameSection>{renderInputs(teamCount)}</TeamNameSection>

      <div>
        <h2>Specific Arist </h2>
        <BrowseArtistDiv>
          <ArtistInputField
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <StyledSearchIcon onClick={handleAristSearch} />
        </BrowseArtistDiv>

        <h2>Random</h2>
      </div>

      <div>
        <button>Play</button>
      </div>
    </div>
  );
};

export default TeamSelect;
