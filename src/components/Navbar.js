import React from 'react';
import styled, { css } from 'styled-components/macro';

import { Link } from 'react-router-dom';
import { menuData } from './Data/Menudata';
import { Button } from './Button';

const Nav = styled.nav`
     height:80px;
    
     display:flex;
     width: max-content;
     justify-content:space-between;
     padding :1rem 1rem;
     z-index:100;
     postion:fixed;
     width:90%;
     background:white;
`;

const NavLink = css`
color: black;
dislplay: flex;
align-items: center;
padding :1rem 2rem;
height :100%;
width :100%;
// margin-right :30px;
cursor :pointer;
text-decoration:none;
`;

const Logo = styled(Link)`
     color:red;
     margin-top :15px;
     font-style: italic: 
`;

const MenuBars = styled.i``;
const NavMenu = styled.div`
  display:flex;
  align-items:center;
  justify-items:center;

`;
const NavMenuLinks = styled(Link)`
      ${NavLink}
`;
const Navbar = () => {
  return (
    <Nav>
      <logo>Coding School</logo>
      <menuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>

        ))}

      </NavMenu>
     
    </Nav>

  );

}; 
export default Navbar; 