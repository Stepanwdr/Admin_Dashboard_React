import React, { useState } from "react";
import styled from "styled-components";
import mainMusic from "../assets/bellaciao.jpg";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Section>
      <PlayerBg>
        <img src={mainMusic} alt="main music" />
      </PlayerBg>
      <PLayerContainer>
        <Details>
          <Track>
            <h6>Bella Ciao</h6>
          </Track>
          <Input type="range" />
          <Controls>
            <BiSkipNext />
            {isPlaying ? (
              <BsFillPauseFill onClick={() => setIsPlaying(!isPlaying)} />
            ) : (
              <BsFillPlayFill onClick={() => setIsPlaying(!isPlaying)} />
            )}

            <BiSkipPrevious />
          </Controls>
        </Details>
      </PLayerContainer>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  margin-top: 1.3rem;
`;
const PlayerBg = styled.div`
 img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
`;
const PLayerContainer = styled.div`
  background: linear-gradient(to bottom, transparent 10%, black 100%);
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`;
const Details = styled.div`
  position: absolute;
  bottom: 1rem;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
`;
const Track = styled.div`
  font-weight: 100;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;
const Controls = styled.div`
  display: flex;
  gap: 1rem;
  align-items:center;
  svg{
    font-size: 1.8rem;
   cursor: pointer;
  }
`;
const Input = styled.input`
  -webkit-appearance: none;
  background-color: #ffffff76;
  border-radius: 1rem;
  height: 0.3rem;
`;
export default Player;
