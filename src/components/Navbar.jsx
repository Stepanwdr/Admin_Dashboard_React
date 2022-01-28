import {BiChevronDown}from "react-icons/bi"
import styled from "styled-components";
const Navbar=()=>{
    return(
        <Nav>
  <Title>Overview</Title>
  <TimeLine>
<span>Las 30 days</span>
<BiChevronDown/>
</TimeLine>
        </Nav>

    )
}

const Nav=styled.nav`
display: flex;
align-items:center;
  justify-content: space-between;
  color: white;
  margin: 2rem;
`
const Title=styled.h2`

`
const TimeLine=styled.div`
display:flex;
justify-content: space-between;
align-items:center;
cursor:pointer;
svg {
    color: var(--primary-color);
    font-size: 2rem;
  }
`
export default Navbar;