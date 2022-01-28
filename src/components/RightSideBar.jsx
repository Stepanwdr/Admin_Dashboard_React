import ActiveListeners from "./ActiveListeners";
import Avatar from "./Avatar";
import Player from "./Player";
import styled from "styled-components";
const RightSideBar = () => {
  return (
    <Section>
      <Avatar />
      <ActiveListeners />
      <Player />
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--dark-background-color);

  padding: 0 3rem;
  padding-top: 2rem;
`;
export default RightSideBar;
