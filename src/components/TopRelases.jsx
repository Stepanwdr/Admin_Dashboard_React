import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";
import { BsChevronRight } from "react-icons/bs";

import music1 from "../assets/bellaciao.jpg";
import music2 from "../assets/music2.jpeg";
import music3 from "../assets/music3.jpeg";
import music4 from "../assets/music4.jpeg";
import music5 from "../assets/music5.jpeg";
import music6 from "../assets/music6.jpeg";

const TopRelases = () => {
  const musics = [
    {
      title: "Bella ciao",
      plays: 64,
      image: music1
    },
    {
      title: "New Rules",
      plays: 124,
      image: music2
    },
    {
      title: "F.R.I.E.N.D.S",
      plays: 500,
      image: music3
    },
    {
      title: "A year without rain",
      plays: 238,
      image: music4
    },
    {
      title: "Stay",
      plays: 334,
      image: music5
    },
    {
      title: "Echo",
      plays: 25,
      image: music6
    }
  ];
  return (
    <Section>
      <TitleContainer>
        <Title>
          <h4>Top Relases</h4>
        </Title>
        <Filters>
          <span>All Releases</span>
          <button>New Release</button>
        </Filters>
      </TitleContainer>
      <Musics>
        {musics.map(({ title, plays, image }) => (
          <Music key={title}>
            <Details>
              <Image>
                <img src={image} alt="title" />
              </Image>
              <Info>
                <h5>{title}</h5>
                <h6>{plays}K Plays</h6>
              </Info>
            </Details>
            <BsChevronRight />
          </Music>
        ))}
      </Musics>
    </Section>
  );
};

const Section = styled.section`
  ${applyCardStyles}
  color:white;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  svg {
    color: var(--primary-color);
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  color: var(--primary-color);
  span {
  }
  button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
    font-weight: bolder;
  }
`;
const Musics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Music = styled.div`
  border-bottom: 0.1rem solid #242424;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Details = styled.div`
  display: flex;
  gap: 1rem;
`;
const Image = styled.div`
  img {
    height: 2.5rem;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h6 {
    font-weight: 100;
  }
`;
const Title = styled.div``;


export default TopRelases;
