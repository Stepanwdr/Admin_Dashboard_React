import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BiGroup, BiBell } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiAnalogue } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <Aside>
      <Logo>
        <RiNeteaseCloudMusicLine />
      </Logo>
      <NavLinks>
        <NavLink selected={true}>
          <SiAnalogue />
        </NavLink>
        <NavLink>
          <HiOutlineMusicNote />
        </NavLink>
        <NavLink>
          <BiBell />
        </NavLink>
        <NavLink>
          <AiOutlineDollarCircle />
        </NavLink>
        <NavLink>
          <BiGroup />
        </NavLink>
      </NavLinks>
      <Help>
        <FiHelpCircle />
      </Help>
    </Aside>
  );
};
const Aside = styled.div`
  height: 100%;
  background-color: var(--dark-background-color);
  width: max-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    color: white;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
  }
`;
const Logo = styled.div`
  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
  }
`;
const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style-type: none;
`;
const NavLink = styled.li`
  border-radius: 1rem;
  padding: 0.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ selected }) =>
    selected && "0 0 60px 8px var(--primary-color)"};
  color: ${({ selected }) => selected && "var(--primary-color)"};
  background-color: ${({ selected }) => selected && "transparent"};
  &:hover {
    box-shadow: 0 0 60px 8px var(--primary-color);
    svg {
      color: var(--primary-color);
    }
  }
  svg {
    color: ${({ selected }) => (selected ? "var(--primary-color)" : "white")};
  }
`;
const Help = styled.div`
  svg {
    transition: 0.5s ease-in-out;
    cursor: pointer;
    color: white;
  }
  &:hover {
    svg {
      color: var(--primary-color);
    }
  }
`;
export default Sidebar;
