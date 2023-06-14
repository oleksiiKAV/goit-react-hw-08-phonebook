import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


export const ListStyled = styled.ul`
  display: flex;
  padding: 0;
  column-gap: 40px;
  list-style: none
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  padding: 7px 20px;
  border: 0.5px solid #ffffff;
  border-radius: 15px;

  &.active {
    color: #5a5df7;
    font-weight:700;
    background-color: #f2e53b;
  }

  &:hover {
    
    border-color: #f2e63b65;
  }
  &:focus {
    
    border-color: #f2e63b65;
  }

`;
