import styled from "styled-components";
import avatar from "../assets/avatar.png";
import { BiChevronDown } from "react-icons/bi";
const Avatar = () => {
  return (
    <Section>
      <Image>
        <img src={avatar} alt={"avatar"} />
      </Image>
      <Name>
        <span>Alex Atkinson</span>
        <BiChevronDown />
      </Name>
    </Section>
  );
};
const Section = styled.section`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid #242424;
  color: white;
  gap: 0.4rem;
`;
const Image = styled.div`
  img {
    height: 3rem;
    border-radius: 2rem;
  }
`;
const Name = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: "white";
`;
export default Avatar;
